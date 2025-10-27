"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherInfo, setVoucherInfo] = useState<{ credits: number; note: string } | null>(null);
  const [error, setError] = useState("");

  const handleVoucherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/voucher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: voucherCode }),
    });
    if (res.ok) {
      const data = await res.json();
      setVoucherInfo(data);
      setError("");
    } else {
      setError("Invalid voucher");
      setVoucherInfo(null);
    }
  };

  // Sample catalogue - in real, fetch from DB
  const products = [
    { type: "lead", title: "Tech Leads", summary: "Technology leads" },
    { type: "index", title: "Market Index", summary: "Custom index" },
    { type: "bundle", title: "Leads + Indices", summary: "Bundle" },
  ];

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <form onSubmit={handleVoucherSubmit} className="mb-8">
        <input
          type="text"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          placeholder="Enter voucher code"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Apply</button>
        {error && <p className="text-red-500">{error}</p>}
        {voucherInfo && (
          <p>Credits: {voucherInfo.credits}, Note: {voucherInfo.note}</p>
        )}
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p, idx) => <ProductCard key={idx} {...p} />)}
      </div>
    </main>
  );
}
