import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
  Label,
} from "recharts";

function Graphline(props) {
  var percentage = props.percentile.toString() + "%";

  const data = [
    {
      name: "0%",

      pv: 2400,
    },
    {
      name: "10%",
      pv: 3000,
    },
    {
      name: "20%",

      pv: 1398,
    },
    {
      name: "30%",

      pv: 4398,
    },

    {
      name: "40%",

      pv: 9800,
    },
    {
      name: "50%",

      pv: 2800,
    },
    {
      name: "60%",

      pv: 3908,
    },
    {
      name: "70%",

      pv: 1908,
    },
    {
      name: "80%",

      pv: 4800,
    },
    {
      name: "90%",

      pv: 7800,
    },
    {
      name: "100%",

      pv: 3800,
    },
  ];

  const specificValues = [
    { name: "80%", value: 7000 },
    // { name: "Aug", value: 80 },
    // ...
  ];

  return (
    <>
      <div
        className="graph_line"
        style={{
          border: "1px solid #ebf0f5",
          borderRadius: "5px",
          height: "315px",
          padding: "20px",
        }}
      >
        <ResponsiveContainer width={620} height={330}>
          <LineChart width={620} height={300} data={data}>
            <XAxis dataKey="name" style={{ color: "#9EAAB7" }} />
            {/* <YAxis /> */}
            {/* <CartesianGrid stroke="#eee" /> */}
            {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> */}
            <ReferenceLine x="80%" stroke="orange" />
            <ReferenceLine x={percentage} stroke="#438AF6" />
            <Line dot={false} type="monotone" dataKey="pv" stroke="gray" />
            <Tooltip />
            {/* <Legend /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graphline;

const CustomLabel = ({ value }) => (
  <text x={0} y={-20} fill="#8884d8" textAnchor="middle">
    {/* {value} */}
  </text>
);
