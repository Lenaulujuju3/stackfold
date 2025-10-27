'use client';  // Add this line

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  // Add more data points for realism
  { name: "Mar", value: 500 },
  { name: "Apr", value: 280 },
  { name: "May", value: 600 },
];

export default function DashboardContent() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="solid-card p-4">KPI 1: 100 Leads Generated</div>
        <div className="solid-card p-4">KPI 2: 200 Indices Tracked</div>
        <div className="solid-card p-4">KPI 3: 300 Active Subscriptions</div>
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
        {/* Placeholder for 2 more charts - duplicate or vary for completeness */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1e40af" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lead Conversion Rate</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Index Performance</td>
            <td>+15%</td>
          </tr>
          {/* Add more rows for placeholder data */}
        </tbody>
      </table>
    </div>
  );
}