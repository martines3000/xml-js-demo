"use client";

import { ChangeEvent, useState } from "react";
import { xml2js } from "xml-js";
export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    try {
      const json = xml2js(event.target.value, { compact: true });
      setOutput(JSON.stringify(json, null, 2));
      console.log(json);
    } catch (error) {
      setOutput("Error parsing XML");
      console.error(error);
    }
  };

  return (
    // Gradient background
    <main className="flex min-h-screen p-24 bg-gradient-to-r from-blue-200 to-red-200">
      <div className="flex flex-1 space-x-8 flex-row items-center justify-center">
        {/* 2 Cards with shadow and rounding elevated */}
        <div className="h-full flex flex-1 flex-col p-8 bg-white rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold">XML Input</h1>
          <div className="text-gray-600 h-full overflow-auto flex mt-6">
            <textarea
              onChange={(event) => {
                handleInputChange(event);
              }}
              value={input}
              className="w-full flex bg-slate-100 text-lg resize-none"
            ></textarea>
          </div>
        </div>
        <div className="h-full flex flex-1 flex-col p-8 bg-white rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold">JSON Output</h1>
          <div className="text-gray-600 h-full overflow-auto flex mt-6">
            {output}
          </div>
        </div>
      </div>
    </main>
  );
}
