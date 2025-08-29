import React, { useState } from "react";
import SymptomInput from "./components/SymptomInput.jsx";
import PredictionResult from "./components/PredictionResult.jsx";
import Loader from "./components/Loader.jsx";
import { predictDisease } from "./api/geminiApi.js"; 
import "./index.css";

// Main App Component
function App() {
  const [prediction, setPrediction] = useState(""); // plain text from Gemini
  const [loading, setLoading] = useState(false);

  // Handles prediction logic
  const handlePredict = async (symptomList) => {
    setLoading(true);
    try {
      const result = await predictDisease(symptomList);
      setPrediction(result); // just store string
    } catch (error) {
      setPrediction(`❌ Prediction failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fff9f5] relative">
      {/* Warm Light Apricot & Coral background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🩺 Disease Prediction Tool
        </h1>

        <SymptomInput onPredict={handlePredict} loading={loading} />

        {loading && <Loader />}
        {prediction && <PredictionResult prediction={prediction} />}
      </div>
    </div>
  );
}

export default App;

