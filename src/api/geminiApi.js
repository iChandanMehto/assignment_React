// src/api/geminiApi.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); 
// Make sure you store API key in .env file as VITE_GEMINI_API_KEY

// Function to predict disease based on symptoms
export const predictDisease = async (symptoms) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a medical assistant. Based on the following symptoms: ${symptoms}, 
    predict the possible diseases. Provide short and clear predictions, 
    and also suggest whether the user should consult a doctor.`;

    const result = await model.generateContent(prompt);

    // ✅ Correct way to extract text
    const response = await result.response;
    const text = response.candidates[0]?.content?.parts[0]?.text || "No response from AI.";

    return text;
  } catch (error) {
    console.error("Error fetching prediction:", error);
    return "Error predicting disease. Please try again.";
  }
};
