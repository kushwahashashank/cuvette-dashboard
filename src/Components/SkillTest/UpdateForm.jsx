import React, { useState } from "react";
import "./Update.css";
const UpdateForm = (props) => {
  const [scoret, setScoret] = useState(props.score);
  const [percentilet, setPercentilet] = useState(props.percentile);
  const [rankt, setRankt] = useState(props.rank);
  const saveValues = () => {
    if (scoret.length > 0 && percentilet.length > 0 && rankt.length > 0) {
      props.setScore(scoret);
      props.setPercentile(percentilet);
      props.setRank(rankt);
      props.setUpdate(false);
    } else {
      alert("Please fill details");
    }
  };
  return (
    <div className="update" >
      <div className="update-head">
        <p style={{ fontSize: "36px", fontWeight: "700" }}>Update Scores</p>
        <img style={{ height: "50px" }} src="/html.png" alt="" />
      </div>
      <div className="form-input">
        <div className="form-input-1">
          <p className="numbering">1</p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "22px",
              color: "#566474",
              display: "flex",
            }}
          >
            Update your{" "}
            <p style={{ fontWeight: "700", marginLeft: "6px" }}> rank</p>
          </p>
        </div>
        <input
          onChange={(e) => setRankt(e.target.value)}
          defaultValue={props.rank}
          type="number"
          className="input"
        />
      </div>

      <div className="form-input">
        <div className="form-input-1">
          <p className="numbering">2</p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "22px",
              color: "#566474",
              display: "flex",
            }}
          >
            Update your{" "}
            <p style={{ fontWeight: "700", marginLeft: "6px" }}> percentile</p>
          </p>
        </div>
        <input
          onChange={(e) => setPercentilet(e.target.value)}
          defaultValue={props.percentile}
          type="number"
          className="input"
        />
      </div>
      <div
        className="form-input"
        style={{ borderBottom: "1px solid #ebf0f5", paddingBottom: "40px" }}
      >
        <div className="form-input-1">
          <p className="numbering">3</p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "22px",
              color: "#566474",
              display: "flex",
            }}
          >
            Update your{" "}
            <p style={{ fontWeight: "700", marginLeft: "6px" }}>
              {" "}
              current score (out of 15)
            </p>
          </p>
        </div>
        <input
          onChange={(e) => setScoret(e.target.value)}
          defaultValue={props.score}
          type="number"
          className="input"
        />
      </div>
      <div className="buttons">
        <button onClick={saveValues} className="btn-2">
          Save &rarr;
        </button>
        <button onClick={() => props.setUpdate(false)} className="btn-1">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
