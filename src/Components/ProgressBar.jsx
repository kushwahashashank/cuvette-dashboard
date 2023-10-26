import React from "react";

const Progress_bar = ({ bgcolor, progress,bgparent }) => {
  const Parentdiv = {
    height: "10px",
    width: "200px",
    backgroundColor:bgparent ,
    borderRadius: "10px",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: "10px",
    textAlign: "right",
  };
  const progres = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={progres}>
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>
      <p style={{ fontSize: "16px", fontWeight: "700", color: `${bgcolor}` }}>
        {progress}%
      </p>
    </div>
  );
};

export default Progress_bar;
