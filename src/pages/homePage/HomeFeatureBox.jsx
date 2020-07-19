import React from "react";
import { FeatureBox } from "./HomeStyles";

export const HomeFeatureBox = ({ featImg, feattitle, featDesc }) => {
  return (
    <FeatureBox>
      <img src={featImg} alt="Feature" />
      <p>{feattitle}</p>
      <p>{featDesc}</p>
      <button>Read More</button>
    </FeatureBox>
  );
};
