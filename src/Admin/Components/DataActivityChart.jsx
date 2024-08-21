import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
  {
    name: "Mon",
    Images: 35,
    type: "Images",
    Media: 25,
    Documents: 10,
    Other: 5,
  },
  {
    name: "Tue",
    Images: 60,
    type: "Media ",
    Media: 45,
    Documents: 15,
    Other: 10,
  },
  {
    name: "Wed",
    Images: 50,
    type: "Documents",
    Media: 30,
    Documents: 20,
    Other: 15,
  },
  {
    name: "Thu",
    Images: 70,
    type: "pdf ",
    Media: 50,
    Documents: 25,
    Other: 20,
  },
  {
    name: "Fri",
    Images: 60,
    type: "Video ",
    Media: 40,
    Documents: 30,
    Other: 15,
  },
  {
    name: "Sat",
    Images: 90,
    type: "Sound ",
    Media: 28,
    Documents: 40,
    Other: 22,
  },
  {
    name: "Sun",
    Images: 20,
    type: "Images",
    Media: 10,
    Documents: 5,
    Other: 3,
  },
];

// Custom Tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { color, name, value, type } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "5px 10px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          border: "1px solid #ECEFF1",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: color,
              marginRight: 8,
            }}
          />
          <span style={{ color: "#607D8B" }}>{name}: {type} </span>
          <span style={{ fontWeight: "bold", marginLeft: 5 }}>{value}</span>
        </div>
      </div>
    );
  }

  return null;
};

export default function DataActivityChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 4, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>
        Data Activity
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          barCategoryGap="25%"
          margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
          onMouseLeave={handleMouseLeave}
        >
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{ marginBottom: "20px" }}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#ECEFF1"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={{ stroke: "#ECEFF1" }}
            tick={{ fontSize: 12, fill: "#607D8B" }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#ECEFF1" }}
            tick={{ fontSize: 12, fill: "#607D8B" }}
          />
          <Tooltip
            cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
            contentStyle={{
              borderRadius: "8px",
              borderColor: "#ECEFF1",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey="Images"
            stackId="a"
            fill="#4CAF50"
            radius={[0, 0, 0, 0]}
            onMouseEnter={() => handleMouseEnter(0)}
            opacity={activeIndex === null || activeIndex === 0 ? 1 : 0.3}
          />
          <Bar
            dataKey="Media"
            stackId="a"
            fill="#FF5722"
            radius={[0, 0, 0, 0]}
            onMouseEnter={() => handleMouseEnter(1)}
            opacity={activeIndex === null || activeIndex === 1 ? 1 : 0.3}
          />
          <Bar
            dataKey="Documents"
            stackId="a"
            fill="#FFC107"
            radius={[0, 0, 0, 0]}
            onMouseEnter={() => handleMouseEnter(2)}
            opacity={activeIndex === null || activeIndex === 2 ? 1 : 0.3}
          />
          <Bar
            dataKey="Other"
            stackId="a"
            fill="#607D8B"
            radius={[20, 20, 0, 0]}
            onMouseEnter={() => handleMouseEnter(3)}
            opacity={activeIndex === null || activeIndex === 3 ? 1 : 0.3}
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
