import React, { useState } from "react";

function SymptomInput({ onPredict, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onPredict(input); // call parent function
    setInput(""); // clear box after submit
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your symptoms (e.g. fever, cough)"
        className="flex-1 p-2 border rounded-lg shadow-sm focus:ring focus:ring-orange-300"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 disabled:bg-gray-300"
      >
        Predict
      </button>
    </form>
  );
}

export default SymptomInput;
