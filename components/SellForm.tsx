"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function SellForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      Papa.parse(selectedFile, {
        header: true,
        complete: (results) => {
          setPreview(results.data.slice(0, 5)); // Preview first 5 rows
        },
      });
    }
  };

  const requiredHeaders = ["email", "phone", "zip", "vertical"];

  return (
    <form>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {preview.length > 0 && (
        <div>
          <h3>Preview:</h3>
          <table className="border">
            <thead><tr>{Object.keys(preview[0]).map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {preview.map((row, idx) => (
                <tr key={idx}>{Object.values(row).map((v, i) => <td key={i}>{v as string}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Submit</button>
    </form>
  );
}
