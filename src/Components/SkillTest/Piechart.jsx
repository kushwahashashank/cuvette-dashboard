import React from "react";
import { PieChart, Pie, Cell } from "recharts";
// import './App.css'

function Piegraph(props) {
  const data = [
    { name: "Group A", value: parseInt(props.score) },
    { name: "Group B", value: 15 - parseInt(props.score) },
  ];
  const COLORS = ["#438AF6", "#438AF61A"];

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PieChart width={250} height={250}>
          <Pie data={data} innerRadius={60} outerRadius={90} dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <img
          style={{ width: "45px", position: "absolute" }}
          src="/aim.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Piegraph;
