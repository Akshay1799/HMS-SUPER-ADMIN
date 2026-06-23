"use client";

import React from "react";
import { ChartCard } from "@/components/ui/chart-card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Occupied Beds", value: 680, color: "hsl(var(--primary))" },
  { name: "Available Beds", value: 320, color: "hsl(var(--success))" },
];

export function BedOccupancyChart() {
  return (
    <ChartCard
      title="Bed Occupancy"
      description="Live status tracking of occupied vs available emergency/clinical beds."
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
              borderRadius: "var(--radius-card)",
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
