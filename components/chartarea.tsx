"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import { CustomTooltip } from "./tooltip";

const chartData = [
  { month: "Сентябрь", price: 240_990 },
  { month: "Октябрь", price: 210_990 },
  { month: "Ноябрь", price: 190_990 },
  { month: "Декабрь", price: 234_990 },
  { month: "Январь", price: 190_990 },
  { month: "Февраль", price: 184_990 },
];

const chartConfig = {
  price: {
    label: "",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaLinear() {
  return (
    <Card className="ring-foreground/5">
      <CardHeader>
        <CardTitle>История цены</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 26,
              right: 26,
            }}
          >
            <defs>
              <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-price)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Area
              dataKey="price"
              type="linear"
              fill="url(#fillPrice)"
              fillOpacity={0.4}
              stroke="none"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
