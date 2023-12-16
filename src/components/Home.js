import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home1">
      <header>
        <div className="tit">
          <h1>
            BOOK YOUR <br></br> TICKETS FOR{" "}
            <b
              style={{
                color: "green",
                fontSize: "100px",
                fontFamily: "initial",
              }}
            >
              MOVIES
            </b>
            <br></br>
            <span>
              <p className="subtit">
                (safe,secure,reliable ticketing.Your ticket to live
                entertainment)
              </p>
            </span>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Home;
