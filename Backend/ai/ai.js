
import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";

dotenv.config();

const cohere = new CohereClient({
  token: process.env.CO_API_KEY
});

export async function getAIResponse(userMessage, dbData) {
  const systemPrompt = `
    You are an AI assistant for a medical chatbot.
    Use this database info if relevant: ${JSON.stringify(dbData)}.
    Answer in a helpful and clear way.
  `;

  try {
    // ✅ Use updated model name
    const response = await cohere.chat({
      model: "command-a-03-2025",  // changed from "command-r"
      message: userMessage,
      chat_history: [],
      preamble: systemPrompt,
      temperature: 0.7,
      max_tokens: 300
    });

    // ✅ Extract text safely
    const aiSuggestion = response.text || "No suggestion available";
    return aiSuggestion;

  } catch (error) {
    console.error("Error getting AI response:", error?.message || error);
    return "AI service is unavailable right now.";
  }
}







// import dotenv from "dotenv";
// import { CohereClient } from "cohere-ai";

// dotenv.config();

// const cohere = new CohereClient({
//   token: process.env.CO_API_KEY
// });

// export async function getAIResponse(userMessage, dbData) {
//   const systemPrompt = `
//     You are an AI assistant for a medical chatbot.
//     Use this database info if relevant: ${JSON.stringify(dbData)}.
//     Answer in a helpful and clear way.
//   `;

//   try {
//     // Use the Chat API for command-r model
//     const response = await cohere.chat({
//       model: "command-r",
//       message: userMessage,
//       chat_history: [],
//       preamble: systemPrompt,
//       temperature: 0.7,
//       max_tokens: 300
//     });

//     // Extract AI suggestion
//     const aiSuggestion = response.text || "No suggestion available";
//     return aiSuggestion;
//   } catch (error) {
//     console.error("Error getting AI response:", error);
//     return "AI service is unavailable right now.";
//   }
// }










// // ai.js
// import dotenv from "dotenv";
// import { CohereClient } from "cohere-ai";

// dotenv.config();

// // Initialize Cohere with API key
// // cohere.init(process.env.COHERE_API_KEY);
// const cohere = new CohereClient({
//   token: process.env.CO_API_KEY // or put your API key directly for testing
// });

// export async function getAIResponse(userMessage, dbData) {
//   const systemPrompt = `
//   You are an AI assistant for a medical chatbot.
//   Use this database info if relevant: ${JSON.stringify(dbData)}.
//   Answer in a helpful and clear way.
//   `;

//   const prompt = `${systemPrompt}\nUser: ${userMessage}`;

//   try {
//     // Call Cohere API (using Chat or Generate depending on your model)
//     const response = await cohere.generate({
//       model: "command-r", // Try "command-r-plus" or "command-light" if available
//       prompt: prompt,
//       max_tokens: 300,
//       temperature: 0.7
//     });

//     // Extract AI suggestion
//     const aiSuggestion = response.generations[0].text || "No suggestion available";

//     return aiSuggestion;
//   } catch (error) {
//     console.error("Error getting AI response:", error);
//     return "AI service is unavailable right now.";
//   }
// }
