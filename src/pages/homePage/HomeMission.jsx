import React from "react";
import { MissionContainer } from "./HomeStyles";
import MissionImg from "../../assets/mission.png";

export const HomeMission = () => {
  return (
    <MissionContainer>
      <p className="title">
        Our <span>Mission</span>
      </p>
      <div className="mission-content">
        <div className="statement">
          <p>
            Provide our customers with fast, most professional, dependable and
            technologically advanced delivery service in Canada.
          </p>
          <p>
            We strive to accomplish this through fair pricing and always holding
            ourselves to the highest degree of honesty and integrity when
            dealing with our customers.
          </p>
        </div>
        <img src={MissionImg} alt="Misison Statement" />
      </div>
    </MissionContainer>
  );
};
