const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const natural = require('natural');
const path = require('path');
const intents = require('./intents');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize the classifier
const classifier = new natural.BayesClassifier();

// Train the classifier with the intents
intents.intents.forEach((intent) => {
  intent.patterns.forEach((pattern) => {
    classifier.addDocument(pattern, intent.tag);
  });
});
classifier.train();

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Chat endpoint
app.post("/chat", (req, res) => {
  const { message } = req.body;
  const classification = classifier.classify(message);
  const intent = intents.intents.find(
    (intent) => intent.tag === classification
  );
  const response = intent
    ? intent.responses[Math.floor(Math.random() * intent.responses.length)]
    : "Sorry, I didn't understand that.";
  res.json({ reply: response });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
