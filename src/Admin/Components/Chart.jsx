import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Asia: 4000, America: 2400 },
  { name: 'Feb', Asia: 3000, America: 1398 },
  { name: 'Mar', Asia: 2000, America: 9800 },
  { name: 'Apr', Asia: 2780, America: 3908 },
  { name: 'May', Asia: 1890, America: 4800 },
  { name: 'Jun', Asia: 2390, America: 3800 },
  { name: 'Jul', Asia: 3490, America: 4300 },
  { name: 'Aug', Asia: 4000, America: 2400 },
  { name: 'Sep', Asia: 3000, America: 1398 },
  { name: 'Oct', Asia: 2000, America: 9800 },
  { name: 'Nov', Asia: 2780, America: 3908 },
  { name: 'Dec', Asia: 1890, America: 4800 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Asia" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="America" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
