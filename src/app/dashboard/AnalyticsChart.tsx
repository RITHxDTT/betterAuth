"use client"; // Required for Recharts in Next.js
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Figma', '2020': 25, '2021': 40 },
  { name: '1', '2020': 45, '2021': 55 },
  { name: 'XD', '2020': 65, '2021': 75 },
  { name: 'PS', '2020': 65, '2021': 70 },
  { name: 'AI', '2020': 40, '2021': 50 },
  { name: 'CorelDRAW', '2020': 35, '2021': 30 },
  { name: 'InDesign', '2020': 55, '2021': 22 },
  { name: 'Canva', '2020': 75, '2021': 35 },
  { name: 'Webflow', '2020': 55, '2021': 50 },
];

export default function AnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 12 }} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 12 }} 
        />
        <Tooltip />
        <Legend verticalAlign="bottom" align="center" iconType="plainline" />
        <Line 
          type="monotone" 
          dataKey="2020" 
          stroke="#818cf8" 
          strokeWidth={2} 
          dot={false} 
        />
        <Line 
          type="monotone" 
          dataKey="2021" 
          stroke="#fda4af" 
          strokeWidth={2} 
          dot={false} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}