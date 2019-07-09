import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  // { "00:00": 0 },
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined) // undefined keyword
];

// A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

export default function Chart({ name }) {
  return (
    <React.Fragment>
      <Title>{name}</Title>
      <ResponsiveContainer>
        {/* needed to display graph, makes graph adapt to container size */}
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
          isAnimationActive={false}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke="#556CD6"
            dot={false}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
