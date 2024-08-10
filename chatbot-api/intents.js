const intents = {
    intents: [
      {
        tag: "greetings",
        patterns: [
          "hello",
          "hey",
          "hi",
          "good day",
          "greetings",
          "what's up?",
          "how is it going",
        ],
        responses: ["hello", "hey!", "what can i do for you?"],
        context: [""],
      },
      {
        tag: "goodbye",
        patterns: [
          "cya",
          "see you later",
          "goodbye",
          "have a good day",
          "bye",
          "ciao",
          "see ya",
        ],
        responses: ["have a nice day", "goodbye"],
        context: [""],
      },
      {
        tag: "age",
        patterns: [
          "how old",
          "how old are you?",
          "what is your age",
          "how old are you",
          "age?",
        ],
        responses: [
          "I get reborn after every compilation",
          "hey!",
          "my owners are averagely 20 years!",
        ],
        context: [""],
      },
      {
        tag: "name",
        patterns: [
          "what is your name",
          "what should i call you",
          "what's your name?",
          "who are you?",
          "can you tell me your name",
        ],
        responses: [
          "you can call me neuro-bot!",
          "i am neuro-bot!",
          "i am neuro-bot your medical assistant",
        ],
        context: [""],
      },
      {
        tag: "treatment",
        patterns: [
          "I want treatment",
          "please help",
          "treatment",
          "please give me treatment",
          "need treatment",
        ],
        responses: ["Please tell me what you need treatment for."],
        context: [""],
      },
      {
        tag: "mental_health",
        patterns: [
          "I'm feeling down",
          "I need someone to talk to",
          "I'm anxious",
          "I'm feeling overwhelmed",
          "I need support",
          "Can you help with stress?",
        ],
        responses: [
          "I'm here to listen. Sometimes talking about what you're feeling can help.",
          "It's okay to feel overwhelmed. Consider reaching out to a mental health professional for support.",
          "Practice self-care and try to manage stress through activities you enjoy.",
          "If you're feeling anxious, techniques like deep breathing or mindfulness can be helpful.",
          "Remember, it's important to seek help from friends, family, or a counselor if you're struggling.",
        ],
        context: [""],
      },
      {
        tag: "self_care",
        patterns: [
          "What is self-care?",
          "How can I practice self-care?",
          "Give me self-care tips",
          "What should I do for self-care?",
        ],
        responses: [
          "Self-care involves activities and practices that we engage in on a regular basis to reduce stress and enhance our well-being. It can include things like exercise, healthy eating, and mindfulness.",
          "Here are a few self-care tips: engage in a hobby, take a relaxing bath, practice mindfulness or meditation, and make time for activities you enjoy.",
          "It's important to find what works best for you. Self-care can be different for everyone, so listen to your needs and take care of yourself.",
        ],
        context: [""],
      },
      {
        tag: "coping_mechanisms",
        patterns: [
          "What are coping mechanisms?",
          "How can I cope with stress?",
          "Give me some coping strategies",
          "What can I do when I feel overwhelmed?",
        ],
        responses: [
          "Coping mechanisms are strategies or techniques used to manage stress and difficult emotions. They can include deep breathing exercises, talking to a friend, or engaging in a calming activity.",
          "Some effective coping mechanisms include practicing mindfulness, exercising regularly, maintaining a healthy sleep schedule, and seeking support from loved ones.",
          "Remember, different strategies work for different people, so it might take some time to find what works best for you.",
        ],
        context: [""],
      },
      {
        tag: "mindfulness",
        patterns: [
          "What is mindfulness?",
          "How do I practice mindfulness?",
          "Tell me about mindfulness techniques",
          "How can mindfulness help me?",
        ],
        responses: [
          "Mindfulness is the practice of staying present and fully engaged in the current moment. It involves paying attention to your thoughts, feelings, and surroundings without judgment.",
          "You can practice mindfulness through techniques like meditation, mindful breathing, or simply paying attention to the present moment during daily activities.",
          "Mindfulness can help reduce stress, improve emotional regulation, and increase overall well-being.",
        ],
        context: [""],
      },
      {
        tag: "gratitude",
        patterns: [
          "What is gratitude?",
          "How can I practice gratitude?",
          "Tell me about gratitude exercises",
          "How does gratitude help mental health?",
        ],
        responses: [
          "Gratitude is the practice of recognizing and appreciating the positive aspects of life. It involves acknowledging the good things you have and expressing thanks for them.",
          "You can practice gratitude by keeping a gratitude journal, writing thank-you notes, or simply reflecting on what you're thankful for each day.",
          "Practicing gratitude has been shown to improve mood, enhance relationships, and increase overall happiness.",
        ],
        context: [""],
      },
      {
        tag: "sleep",
        patterns: [
          "How important is sleep for mental health?",
          "What are some tips for better sleep?",
          "How can I improve my sleep quality?",
          "Why is sleep important for mental well-being?",
        ],
        responses: [
          "Sleep is crucial for mental health as it helps regulate mood, improve cognitive function, and support overall well-being. Poor sleep can contribute to increased stress and anxiety.",
          "To improve your sleep quality, try maintaining a consistent sleep schedule, creating a relaxing bedtime routine, and ensuring your sleep environment is comfortable and free from distractions.",
          "If you're struggling with sleep issues, it might be helpful to speak with a healthcare professional for additional guidance and support.",
        ],
        context: [""],
      },
      {
        tag: "emotional_support",
        patterns: [
          "I need emotional support",
          "Can you help me with my feelings?",
          "I feel lonely and need someone to talk to",
          "I'm feeling down, can you listen?",
        ],
        responses: [
          "I'm here for you. Sometimes talking about your feelings can help you feel better. Please share what's on your mind.",
          "It's okay to feel lonely or down. Reaching out to friends, family, or a counselor can provide additional support.",
          "Remember, it's important to take care of your emotional well-being. Engaging in supportive conversations and seeking help when needed can make a difference.",
        ],
        context: [""],
      },
      {
        tag: "stress_management",
        patterns: [
          "How can I manage stress?",
          "Tips for reducing stress",
          "What are some stress-relief techniques?",
          "How do I handle stress?",
        ],
        responses: [
          "Managing stress involves finding healthy ways to cope with challenging situations. Techniques include regular exercise, relaxation exercises, and time management.",
          "Some effective stress-relief techniques are deep breathing, progressive muscle relaxation, and engaging in activities you enjoy.",
          "It's important to identify your stressors and find strategies that work for you, such as talking to a friend or practicing mindfulness.",
        ],
        context: [""],
      },
      {
        tag: "depression",
        patterns: [
          "What is depression?",
          "How do I know if I'm depressed?",
          "What can I do if I feel depressed?",
          "Symptoms of depression",
        ],
        responses: [
          "Depression is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a loss of interest in activities you once enjoyed.",
          "Symptoms of depression can include changes in appetite, sleep disturbances, fatigue, and difficulty concentrating. If you're experiencing these symptoms, it might be helpful to seek support from a mental health professional.",
          "If you're feeling depressed, reaching out to a counselor or therapist can provide valuable support and treatment options.",
        ],
        context: [""],
      },
      {
        tag: "anxiety",
        patterns: [
          "What is anxiety?",
          "How can I manage anxiety?",
          "Signs of anxiety",
          "How to cope with anxiety?",
        ],
        responses: [
          "Anxiety is a feeling of worry or fear that can be overwhelming and interfere with daily activities. It can manifest as physical symptoms, such as a rapid heartbeat or sweating.",
          "To manage anxiety, techniques like mindfulness, deep breathing exercises, and cognitive-behavioral strategies can be helpful. It may also be beneficial to talk to a mental health professional.",
          "If you are experiencing anxiety, identifying triggers and practicing relaxation techniques can help you manage your symptoms more effectively.",
        ],
        context: [""],
      },
      {
        tag: "anger_management",
        patterns: [
          "How can I manage my anger?",
          "Tips for controlling anger",
          "What should I do when I'm angry?",
          "Anger management techniques",
        ],
        responses: [
          "Managing anger involves recognizing your triggers and finding constructive ways to express your feelings. Techniques include taking deep breaths, counting to ten, and practicing relaxation exercises.",
          "Engaging in physical activity or talking about your feelings can also help in managing anger.",
          "If anger is affecting your relationships or daily life, consider seeking support from a counselor or therapist who can provide additional strategies for managing anger.",
        ],
        context: [""],
      },
      {
        tag: "relationship_support",
        patterns: [
          "I need help with my relationship",
          "How can I improve my relationships?",
          "Relationship advice",
          "What should I do if I'm having relationship issues?",
        ],
        responses: [
          "Improving relationships involves communication, empathy, and understanding. It's important to listen to each other and express your needs and feelings openly.",
          "Consider setting aside quality time to connect with your partner or loved ones and addressing any issues together in a supportive manner.",
          "If you're facing relationship challenges, talking to a counselor or therapist can provide additional strategies and support.",
        ],
        context: [""],
      },
      {
        tag: "self_esteem",
        patterns: [
          "How can I improve my self-esteem?",
          "What is self-esteem?",
          "Tips for building self-esteem",
          "How to boost self-confidence?",
        ],
        responses: [
          "Self-esteem is your overall sense of self-worth or value. Improving self-esteem involves recognizing your strengths, setting achievable goals, and practicing self-compassion.",
          "Building self-esteem can include positive affirmations, setting realistic expectations for yourself, and celebrating your achievements.",
          "If you're struggling with self-esteem, consider seeking support from a therapist or counselor who can help you develop a healthier self-image.",
        ],
        context: [""],
      },
      {
        tag: "goal_setting",
        patterns: [
          "How can I set goals effectively?",
          "What are some tips for achieving my goals?",
          "How do I create a goal plan?",
          "Goal-setting strategies",
        ],
        responses: [
          "Effective goal setting involves making your goals Specific, Measurable, Achievable, Relevant, and Time-bound (SMART). Break larger goals into smaller, manageable steps.",
          "Regularly review your progress and adjust your plan as needed. Celebrating small milestones can help keep you motivated.",
          "Consider writing down your goals and creating an action plan to track your progress and stay focused.",
        ],
        context: [""],
      },
      {
        tag: "personal_growth",
        patterns: [
          "What is personal growth?",
          "How can I work on personal development?",
          "Tips for personal growth",
          "How to improve myself?",
        ],
        responses: [
          "Personal growth involves developing yourself through various activities, such as learning new skills, setting goals, and reflecting on your experiences.",
          "Engaging in self-reflection, seeking new challenges, and pursuing activities that interest you can contribute to personal development.",
          "It's important to recognize your progress and continue seeking opportunities for growth and learning.",
        ],
        context: [""],
      },
      {
        tag: "boundaries",
        patterns: [
          "How can I set boundaries?",
          "What are healthy boundaries?",
          "Why are boundaries important?",
          "Tips for establishing boundaries",
        ],
        responses: [
          "Setting boundaries involves defining what is acceptable and unacceptable behavior in your relationships and interactions. It helps protect your mental and emotional well-being.",
          "Communicate your needs clearly and assertively. It's okay to say no and prioritize your own needs.",
          "Healthy boundaries contribute to respectful and balanced relationships. Practice self-awareness and make adjustments as needed.",
        ],
        context: [""],
      },
      {
        tag: "grief",
        patterns: [
          "I'm grieving",
          "How do I cope with grief?",
          "What should I do if I'm mourning?",
          "Dealing with loss",
        ],
        responses: [
          "Grief is a natural response to loss. It's important to allow yourself to feel and express your emotions during this time.",
          "Coping with grief can involve talking to supportive friends or family, engaging in self-care, and seeking professional support if needed.",
          "Remember, everyone experiences grief differently, and it's okay to seek help from a counselor or therapist to navigate your feelings.",
        ],
        context: [""],
      },
      {
        tag: "trauma",
        patterns: [
          "What is trauma?",
          "How can I deal with trauma?",
          "Signs of trauma",
          "Getting help for trauma",
        ],
        responses: [
          "Trauma refers to the emotional and psychological impact of experiencing distressing events. It can manifest as flashbacks, anxiety, or emotional numbness.",
          "Dealing with trauma often involves seeking support from a mental health professional, engaging in trauma-informed therapy, and practicing self-care.",
          "If you are experiencing trauma, it's important to reach out for help and allow yourself time to heal.",
        ],
        context: [""],
      },
      {
        tag: "addiction",
        patterns: [
          "How do I overcome addiction?",
          "What are the signs of addiction?",
          "Getting help for addiction",
          "Addiction recovery tips",
        ],
        responses: [
          "Overcoming addiction often involves seeking support from a therapist or counselor, joining support groups, and creating a structured plan for recovery.",
          "Signs of addiction can include cravings, withdrawal symptoms, and difficulty controlling substance use or behaviors.",
          "Recovery is a process, and it's important to build a support network and address any underlying issues that contribute to the addiction.",
        ],
        context: [""],
      },
      {
        tag: "self_harm",
        patterns: [
          "I am self-harming",
          "How can I stop self-harming?",
          "Dealing with self-harm",
          "What should I do if I self-harm?",
        ],
        responses: [
          "Self-harm is a serious issue, and it's important to seek professional help if you're struggling with it. Reach out to a mental health professional or counselor for support.",
          "In the meantime, consider finding healthier coping strategies, such as talking to someone you trust, practicing relaxation techniques, or engaging in creative activities.",
          "Remember, there are people who care about you and want to help. Reaching out for support is a strong and positive step.",
        ],
        context: [""],
      },
      {
        tag: "suicidal_thoughts",
        patterns: [
          "I have suicidal thoughts",
          "What should I do if I'm feeling suicidal?",
          "How can I get help for suicidal thoughts?",
          "I feel like ending my life",
        ],
        responses: [
          "If you're experiencing suicidal thoughts, it's crucial to seek immediate help. Reach out to a mental health professional, call a crisis hotline, or go to the nearest emergency room.",
          "Talking to a trusted friend or family member can also provide support during this time. Remember, there is help available and people who care about your well-being.",
          "Your safety is the most important thing right now. Please seek support and let others help you through this difficult time.",
        ],
        context: [""],
      },
      {
        tag: "body_image",
        patterns: [
          "I have body image issues",
          "How can I improve my body image?",
          "Dealing with body image concerns",
          "Tips for positive body image",
        ],
        responses: [
          "Improving body image involves developing a positive view of your body and focusing on its strengths. Practice self-compassion and challenge negative thoughts.",
          "Engage in activities that make you feel good about yourself and surround yourself with supportive people. Consider speaking with a therapist if body image concerns are affecting your well-being.",
          "Remember, everyone has unique qualities, and it's important to appreciate and celebrate your individuality.",
        ],
        context: [""],
      },
      {
        tag: "social_anxiety",
        patterns: [
          "How can I manage social anxiety?",
          "What are some tips for dealing with social anxiety?",
          "Signs of social anxiety",
          "How to overcome social anxiety",
        ],
        responses: [
          "Managing social anxiety involves practicing relaxation techniques, gradually facing feared social situations, and seeking support from a therapist if needed.",
          "Techniques like deep breathing, cognitive restructuring, and exposure therapy can help you manage social anxiety effectively.",
          "It's important to recognize your progress and seek support if social anxiety is interfering with your daily life.",
        ],
        context: [""],
      },
      {
        tag: "healthy_habits",
        patterns: [
          "What are some healthy habits?",
          "How can I develop healthy habits?",
          "Tips for a healthy lifestyle",
          "What habits contribute to mental well-being?",
        ],
        responses: [
          "Healthy habits contribute to overall well-being and can include regular exercise, balanced nutrition, adequate sleep, and stress management.",
          "Developing healthy habits involves setting realistic goals, creating a routine, and making gradual changes. It's important to focus on consistency and self-compassion.",
          "Engage in activities that promote physical and mental health, and seek support if you need help building or maintaining these habits.",
        ],
        context: [""],
      },
      {
        tag: "emotional_regulation",
        patterns: [
          "How can I regulate my emotions?",
          "Tips for emotional regulation",
          "What is emotional regulation?",
          "Managing intense emotions",
        ],
        responses: [
          "Emotional regulation involves understanding and managing your emotions in a healthy way. Techniques can include mindfulness, deep breathing, and identifying triggers.",
          "Practicing self-awareness and developing coping strategies can help you manage intense emotions and respond to them constructively.",
          "If emotional regulation is challenging, consider speaking with a mental health professional who can provide guidance and support.",
        ],
        context: [""],
      },
      {
        tag: "mindfulness",
        patterns: [
          "What is mindfulness?",
          "How can I practice mindfulness?",
          "Benefits of mindfulness",
          "Mindfulness exercises",
        ],
        responses: [
          "Mindfulness is the practice of being fully present and engaged in the current moment, without judgment. It can help reduce stress and improve emotional well-being.",
          "You can practice mindfulness through techniques like deep breathing, body scans, or mindful meditation. Apps and guided sessions can also be useful.",
          "Regular mindfulness practice can enhance your focus, reduce stress, and help you manage emotions more effectively.",
        ],
        context: [""],
      },
      {
        tag: "assertiveness",
        patterns: [
          "How can I be more assertive?",
          "What is assertiveness?",
          "Tips for assertive communication",
          "Improving assertiveness skills",
        ],
        responses: [
          "Assertiveness involves expressing your thoughts, feelings, and needs in a clear and respectful manner. It's about standing up for yourself while respecting others.",
          "To be more assertive, practice using 'I' statements, maintain eye contact, and listen actively. Role-playing scenarios can also help build confidence.",
          "Assertiveness can improve your relationships and boost your self-esteem by helping you communicate more effectively.",
        ],
        context: [""],
      },
      {
        tag: "resilience",
        patterns: [
          "What is resilience?",
          "How can I build resilience?",
          "Tips for developing resilience",
          "Why is resilience important?",
        ],
        responses: [
          "Resilience is the ability to bounce back from adversity and adapt to challenges. It involves managing stress and maintaining a positive outlook despite difficulties.",
          "Building resilience can involve developing problem-solving skills, seeking social support, and maintaining a sense of purpose.",
          "Resilience helps you cope with life’s challenges and recover from setbacks more effectively.",
        ],
        context: [""],
      },
      {
        tag: "boundaries_in_relationships",
        patterns: [
          "How do I set boundaries in relationships?",
          "What are healthy boundaries in relationships?",
          "How to communicate boundaries effectively",
          "Managing boundaries with loved ones",
        ],
        responses: [
          "Setting boundaries in relationships involves clearly communicating your needs and limits while respecting others' needs and limits. It helps maintain healthy and respectful interactions.",
          "To set boundaries effectively, be clear and specific about what you need, and be consistent in enforcing them. It's important to discuss boundaries openly with your partner or loved ones.",
          "Healthy boundaries contribute to stronger and more balanced relationships.",
        ],
        context: [""],
      },
      {
        tag: "coping_with_change",
        patterns: [
          "How can I cope with change?",
          "What are some strategies for dealing with change?",
          "Coping with major life changes",
          "Managing transitions",
        ],
        responses: [
          "Coping with change involves adapting to new circumstances and finding ways to manage the associated stress. Strategies include maintaining a routine, seeking support, and focusing on what you can control.",
          "When dealing with major life changes, it can be helpful to set small, achievable goals and practice self-care. Give yourself time to adjust and be patient with the process.",
          "Seeking support from friends, family, or a therapist can also help you navigate transitions more smoothly.",
        ],
        context: [""],
      },
      {
        tag: "healthy_sleep",
        patterns: [
          "How can I improve my sleep?",
          "Tips for better sleep",
          "What are healthy sleep habits?",
          "Dealing with sleep problems",
        ],
        responses: [
          "Healthy sleep habits involve maintaining a consistent sleep schedule, creating a relaxing bedtime routine, and ensuring a comfortable sleep environment.",
          "Avoiding caffeine and electronic screens before bedtime, and managing stress through relaxation techniques can also improve sleep quality.",
          "If you're experiencing persistent sleep problems, consider consulting a healthcare professional for further evaluation and guidance.",
        ],
        context: [""],
      },
      {
        tag: "self_care",
        patterns: [
          "What is self-care?",
          "How can I practice self-care?",
          "Benefits of self-care",
          "Self-care activities",
        ],
        responses: [
          "Self-care involves taking deliberate actions to improve your physical, emotional, and mental well-being. It includes activities that help you relax, recharge, and maintain balance.",
          "Practicing self-care can involve activities like exercise, hobbies, mindfulness, and spending time with loved ones. It's important to find what works best for you.",
          "Regular self-care helps prevent burnout, reduces stress, and improves overall quality of life.",
        ],
        context: [""],
      },
      {
        tag: "work_life_balance",
        patterns: [
          "How can I achieve work-life balance?",
          "Tips for balancing work and personal life",
          "What is work-life balance?",
          "Managing work and personal responsibilities",
        ],
        responses: [
          "Work-life balance involves managing your work and personal life in a way that reduces stress and enhances well-being. It includes setting boundaries and prioritizing self-care.",
          "Tips for achieving work-life balance include setting clear work hours, delegating tasks, and making time for personal interests and relationships.",
          "Maintaining a healthy work-life balance helps improve job satisfaction, reduces stress, and fosters overall well-being.",
        ],
        context: [""],
      },
      {
        tag: "mindful_eating",
        patterns: [
          "What is mindful eating?",
          "How can I practice mindful eating?",
          "Benefits of mindful eating",
          "Mindful eating tips",
        ],
        responses: [
          "Mindful eating involves paying full attention to the experience of eating, including the taste, texture, and aroma of food. It helps you develop a healthier relationship with food.",
          "To practice mindful eating, eat slowly, savor each bite, and listen to your body's hunger and fullness cues. Avoid distractions like screens while eating.",
          "Mindful eating can improve digestion, help with portion control, and enhance your overall enjoyment of meals.",
        ],
        context: [""],
      },
      {
        tag: "social_support",
        patterns: [
          "How can I build a support network?",
          "The importance of social support",
          "Finding social support",
          "Building connections with others",
        ],
        responses: [
          "Building a support network involves connecting with friends, family, and community resources. It helps you share experiences and receive support during challenging times.",
          "Consider reaching out to people you trust, joining groups or organizations, and being open to new connections. Social support can enhance resilience and emotional well-being.",
          "Having a strong support network provides a sense of belonging and helps you navigate life's challenges more effectively.",
        ],
        context: [""],
      },
    ],
  };

  module.exports = intents;