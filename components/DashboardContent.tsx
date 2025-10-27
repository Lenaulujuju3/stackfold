import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  // More data
];

export default function DashboardContent() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="solid-card p-4">KPI 1: 100</div>
        <div className="solid-card p-4">KPI 2: 200</div>
        <div className="solid-card p-4">KPI 3: 300</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0d9488" />
          </BarChart>
        </ResponsiveContainer>
        {/* 2 more charts */}
      </div>
      <table className="w-full border">
        <thead><tr><th>Item</th><th>Value</th></tr></thead>
        <tbody><tr><td>Placeholder</td><td>Data</td></tr></tbody>
      </table>
    </div>
  );
}
