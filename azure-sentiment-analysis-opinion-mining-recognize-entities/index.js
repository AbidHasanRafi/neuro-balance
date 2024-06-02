const express = require("express");
const cors = require("cors");
const {
  TextAnalyticsClient,
  AzureKeyCredential,
} = require("@azure/ai-text-analytics");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

const endpoint = process.env["ENDPOINT"];
const apiKey = process.env["TEXT_ANALYTICS_API_KEY"];
const client = new TextAnalyticsClient(
  endpoint,
  new AzureKeyCredential(apiKey)
);

app.post("/analyze-sentiment", async (req, res) => {
  const documents = req.body.documents;

  if (!documents || !Array.isArray(documents)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Expecting an array of documents." });
  }

  try {
    const results = await client.analyzeSentiment(documents);
    const response = results.map((result, i) => {
      if (result.error) {
        return { id: i, error: result.error };
      } else {
        return {
          id: i,
          document: documents[i],
          sentiment: result.sentiment,
          confidenceScores: result.confidenceScores,
          sentences: result.sentences.map((sentence) => ({
            text: sentence.text,
            sentiment: sentence.sentiment,
            confidenceScores: sentence.confidenceScores,
          })),
        };
      }
    });

    res.send(response);
  } catch (err) {
    console.error("Error analyzing sentiment:", err);
    res.status(500).send({ error: "Failed to analyze sentiment." });
  }
});

app.post("/mine-opinions", async (req, res) => {
  const documents = req.body.documents;

  if (!documents || !Array.isArray(documents)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Expecting an array of documents." });
  }

  try {
    const results = await client.analyzeSentiment(documents, {
      includeOpinionMining: true,
    });
    const response = results.map((result, i) => {
      if (result.error) {
        return { id: i, error: result.error };
      } else {
        return {
          id: i,
          document: documents[i],
          sentiment: result.sentiment,
          confidenceScores: result.confidenceScores,
          sentences: result.sentences.map((sentence) => ({
            text: sentence.text,
            sentiment: sentence.sentiment,
            confidenceScores: sentence.confidenceScores,
            opinions: sentence.opinions.map((opinion) => ({
              target: opinion.target,
              assessments: opinion.assessments.map((assessment) => ({
                text: assessment.text,
                sentiment: assessment.sentiment,
                confidenceScores: assessment.confidenceScores,
              })),
            })),
          })),
        };
      }
    });

    res.send(response);
  } catch (err) {
    console.error("Error mining opinions:", err);
    res.status(500).send({ error: "Failed to mine opinions." });
  }
});

app.post("/extract-analysis", async (req, res) => {
  const documents = req.body.documents;

  if (!documents || !Array.isArray(documents)) {
    return res
      .status(400)
      .send({ error: "Invalid input. Expecting an array of documents." });
  }

  try {
    const actions = {
      recognizeEntitiesActions: [{ modelVersion: "latest" }],
      recognizePiiEntitiesActions: [{ modelVersion: "latest" }],
      extractKeyPhrasesActions: [{ modelVersion: "latest" }],
    };
    const poller = await client.beginAnalyzeActions(documents, actions, "en", {
      includeStatistics: true,
    });

    const resultPages = await poller.pollUntilDone();

    const response = {
      keyPhrases: [],
      entities: [],
      piiEntities: [],
    };

    for await (const page of resultPages) {
      const keyPhrasesAction = page.extractKeyPhrasesResults[0];
      if (!keyPhrasesAction.error) {
        for (const doc of keyPhrasesAction.results) {
          if (!doc.error) {
            response.keyPhrases.push({
              id: doc.id,
              keyPhrases: doc.keyPhrases,
            });
          } else {
            console.error("Error extracting key phrases:", doc.error);
          }
        }
      }

      const entitiesAction = page.recognizeEntitiesResults[0];
      if (!entitiesAction.error) {
        for (const doc of entitiesAction.results) {
          if (!doc.error) {
            response.entities.push({ id: doc.id, entities: doc.entities });
          } else {
            console.error("Error recognizing entities:", doc.error);
          }
        }
      }

      const piiEntitiesAction = page.recognizePiiEntitiesResults[0];
      if (!piiEntitiesAction.error) {
        for (const doc of piiEntitiesAction.results) {
          if (!doc.error) {
            response.piiEntities.push({
              id: doc.id,
              piiEntities: doc.entities,
            });
          } else {
            console.error("Error recognizing PII entities:", doc.error);
          }
        }
      }
    }

    res.send(response);
  } catch (err) {
    console.error("Error extracting analysis:", err);
    res.status(500).send({ error: "Failed to extract analysis." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
