import React, { useState } from "react";
import ProgressBar from "../ProgressBar";

import "./SkillTest.css";
import UpdateForm from "./UpdateForm";
import Piegraph from "./Piechart";
import Graphline from "./Graph";
// import MyChartComponent from "./Chart";
const SkillTest = () => {
  const [score, setScore] = useState("7");
  const [percentile, setPercentile] = useState("40");
  const [rank, setRank] = useState("12890");
  const [update, setUpdate] = useState(false);

  const updateValues = () => {
    setUpdate(true);
  };

  return (
    <div className="skill-test-wrapper">
      {update ? (
        <UpdateForm
          score={score}
          setPercentile={setPercentile}
          percentile={percentile}
          setScore={setScore}
          rank={rank}
          setRank={setRank}
          setUpdate={setUpdate}
        />
      ) : (
        <></>
      )}

      <p style={{ fontSize: "12px", color: "#566474" }}>Skill Test</p>
      <div className="skill-test">
        <div className="skill-test-left">
          <div className="skill-test-result">
            <div className="skill-test-result-topic">
              <img style={{ height: "50px" }} src="/html.png" alt="" />
              <div className="skill-test-result-topic-content">
                <h3 className="text-heading">Hypertext Markup Language</h3>
                <p className="text-content">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 june 2021
                </p>
              </div>
            </div>
            <button onClick={updateValues} className="btn">
              Update
            </button>
          </div>
          <div className="skill-test-result-stats-wrapper">
            <h3 className="text-heading">Quick Statistics</h3>
            <div className="test-result-stats">
              <div className="test-result-stats-1">
                <div className="image-wrapper">
                  <img src="/trophy.png" alt="" />
                </div>
                <div className="test-stats-result-content">
                  <h3 className="text-stats-heading">{rank}</h3>
                  <p className="text-stats-content">YOUR RANK</p>
                </div>
              </div>
              <p className="line"></p>
              <div className="test-result-stats-1">
                <div className="image-wrapper">
                  <img src="/board.png" alt="" />
                </div>
                <div className="test-stats-result-content">
                  <h3 className="text-stats-heading">{percentile}%</h3>
                  <p className="text-stats-content">PERCENTILE</p>
                </div>
              </div>
              <p className="line"></p>
              <div className="test-result-stats-1">
                <div className="image-wrapper">
                  <img src="/check.png" alt="" />
                </div>
                <div className="test-stats-result-content">
                  <h3 className="text-stats-heading">{score} / 15</h3>
                  <p className="text-stats-content">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="skill-test-result"
            style={{ flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ width: "80%" }}>
                <h3 className="text-heading" style={{ paddingBottom: "20px" }}>
                  Comparison Graph
                </h3>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#566474",
                      paddingTop: "5px",
                      paddingBottom: "20px",
                    }}
                  >
                    <b>You scored {percentile}% percentile</b> which is lower
                    than the average percentile 72% of all the engineers who
                    took this assessment
                  </p>
                </div>
              </p>
              <div className="image-wrapper">
                <img src="/graph.png" alt="" />
              </div>
            </div>
            <Graphline percentile={percentile} />
            {/* <MyChartComponent />/ */}
          </div>
        </div>
        <div className="skill-test-right">
          <div className="skill-test-analysis">
            <h3 className="text-heading" style={{ paddingBottom: "20px" }}>
              Syllabus wise Analysis
            </h3>
            <div className="skill-test-analysis-1">
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#566474",
                  marginBottom: "10px",
                }}
              >
                HTML Tools, Forms, History
              </p>
              <ProgressBar bgcolor="#438AF6" progress="80" bgparent="#ebf3ff" />
            </div>
            <div className="skill-test-analysis-1">
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#566474",
                  marginBottom: "10px",
                }}
              >
                Tags & References in HTML
              </p>
              <ProgressBar bgcolor="#FF9142" progress="60" bgparent="#fbede2" />
            </div>

            <div className="skill-test-analysis-1">
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#566474",
                  marginBottom: "10px",
                }}
              >
                Tables & CSS Basics
              </p>
              <ProgressBar bgcolor="#FB5E5E" progress="24" bgparent="#feebeb" />
            </div>
            <div className="skill-test-analysis-1">
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#566474",
                  marginBottom: "10px",
                }}
              >
                Tables & CSS Basics
              </p>
              <ProgressBar bgcolor="#2EC971" progress="96" bgparent="#e1feee" />
            </div>
          </div>
          <div className="skill-test-analysis">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="text-heading" style={{ paddingBottom: "20px" }}>
                Question Analysis
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#438AF6",
                }}
              >
                {score}/15
              </p>
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#566474",
                paddingTop: "5px",
                paddingBottom: "20px",
              }}
            >
              <b>You scored {score} question correct out of 15. </b>
              However it still needs some improvements
            </p>
            <Piegraph score={score} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
