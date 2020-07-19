import React from "react";
import { QualityContainer, QualityBox } from "./HomeStyles";
import QImg1 from "../../assets/quality1.svg";
import QImg2 from "../../assets/quality2.svg";
import QImg3 from "../../assets/quality3.svg";
import QImg4 from "../../assets/quality4.svg";
import ScrollAnimation from "react-animate-on-scroll";

export const HomeQualityBox = () => {
  return (
    <QualityContainer>
      <p>With our highest Quality to </p>
      <p>Handle Express Delivery</p>
      <div className="quality-grid">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={300}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg1}
            QTitle="Secure Delivery"
            Qdesc="STP delivers the best packed packages as well as provides assurance to deliver them safe and secured without any damage. "
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={500}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg2}
            QTitle="Promised Delivery"
            Qdesc="STP has carved out a specialty by focusing on delivering the packages on time as promised."
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={700}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg3}
            QTitle="Best Pricing"
            Qdesc="STP offer excellent products with customer focused pricing!"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutUp"
          delay={900}
          // animateOnce="true"
        >
          <QualityBoxes
            QImg={QImg4}
            QTitle="Complete Support"
            Qdesc="STP provides a customer-centric approach to ensure that all of our clients are receiving best-in-class services."
          />
        </ScrollAnimation>
      </div>
    </QualityContainer>
  );
};

const QualityBoxes = ({ QImg, QTitle, Qdesc }) => {
  return (
    <QualityBox>
      <img src={QImg} alt="Quality" />
      <p>{QTitle}</p>
      <p>{Qdesc}</p>
    </QualityBox>
  );
};
