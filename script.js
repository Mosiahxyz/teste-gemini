
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBSDk9I_PnmrtcoFHCNWStJFpZZkag3yN0");

async function run() {
  // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello, I wanna make a redaction model with the theme: 'Urban Mobility'." }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. how do you want me to do?" }],
      },
    ],
    
  });

  const msg = "Make a model to  readaction in the brazilian enem model"

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();