import { Search } from "lucide-react";
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
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      {/* Input with search icon */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your symptoms (e.g. fever, cough)"
          className="w-full pl-10 pr-4 py-2 border rounded-full shadow-sm focus:ring focus:ring-orange-300"
          disabled={loading}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded-full shadow hover:bg-slate-950 disabled:bg-gray-600"
      >
        Predict
      </button>
    </form>
  );
}

export default SymptomInput;
