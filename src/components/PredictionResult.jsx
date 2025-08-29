import React from "react";

function PredictionResult({ prediction }) {
  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
      <p className="text-gray-700 whitespace-pre-line">{prediction}</p>
    </div>
  );
}

export default PredictionResult;

