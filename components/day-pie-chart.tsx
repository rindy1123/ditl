"use client";

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { Activity } from "@/lib/types";

interface DayPieChartProps {
  activities: Activity[];
}

export function DayPieChart({ activities }: DayPieChartProps) {
  return (
    <ChartContainer
      config={activities.reduce(
        (acc, activity) => {
          acc[activity.id] = {
            label: activity.name,
            color: activity.color,
          };
          return acc;
        },
        {} as Record<string, { label: string; color: string }>,
      )}
      className="aspect-square h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={activities}
            dataKey="hours"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="90%"
            innerRadius="40%"
            paddingAngle={2}
          >
            {activities.map((activity) => (
              <Cell key={activity.id} fill={`var(--color-${activity.id})`} />
            ))}
          </Pie>
          <ChartTooltip
            content={
              <ChartTooltipContent
                valueSuffix={(value) => (value === 1 ? "hour" : "hours")}
              />
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
