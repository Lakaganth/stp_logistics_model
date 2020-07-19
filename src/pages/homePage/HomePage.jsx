import React from "react";

import Hero from "../../assets/hero.png";
import Feat1 from "../../assets/feat1.svg";
import Feat2 from "../../assets/feat2.svg";
import Feat3 from "../../assets/feat3.svg";

import {
  Container,
  HeroContainer,
  HeroTrailing,
  FeatureGrid,
} from "./HomeStyles";

import { HomeFeatureBox } from "./HomeFeatureBox";
import { HomeQualityBox } from "./HomeQualityBox";
import { HomeOperation } from "./HomeOperation";
import { HomeMission } from "./HomeMission";
import ScrollAnimation from "react-animate-on-scroll";
import { Footer } from "../../components/UI/Footer";
import { Link } from "react-router-dom";
import STPLogo from "../../assets/stplogo.svg";

export const HomePage = () => {
  return (
    <Container>
      <HeroContainer>
        <div className="hero-content">
          <img src={STPLogo} alt="stplogo" />
          <p className="q-r">Quick & Reliable</p>
          <p className="dropship">Dropship!</p>
          <p>
            Our delivery services enables your business to achieve the next
            level
          </p>

          <button>
            <Link to="/services">Services</Link>
          </button>
        </div>
        <div className="hero-img">
          <img src={Hero} alt="Hero img" />
        </div>
      </HeroContainer>

      <HeroTrailing>
        <p>Delivering The Best Global</p>
        <p>Logistics Solutions</p>
      </HeroTrailing>

      {/* Page -2 BEGINS */}
      <ScrollAnimation
        animateIn="bounceIn"
        // animateOut="bounceUp"
        delay={300}
        duration={1.2}
        // animateOnce=true
      >
        <FeatureGrid>
          <HomeFeatureBox
            featImg={Feat1}
            feattitle="On-time Delivery"
            featDesc="STP helps you deliver your shipment on time across Canada. Let us know when and where, we'll do the rest."
          />
          <HomeFeatureBox
            featImg={Feat2}
            feattitle="Safe &
          Secure "
            featDesc="We aim hard to supply hassle- free and safe delivery of your important consignment. This is achieved through exceptionally trained equipment operators, experienced freight handlers."
          />
          <HomeFeatureBox
            featImg={Feat3}
            feattitle="Sortation services"
            featDesc="We have the best individuals who are specialists at accurately packaging, sorting and sending your package to its destination."
          />
        </FeatureGrid>
      </ScrollAnimation>
      {/* Page-2 ENDS */}
      {/* Page-3 Begins */}
      <HomeQualityBox />
      {/* Page-3 ENDS */}
      {/* Page-4 Begins */}
      <HomeOperation />
      {/* Page-4 ENDS */}
      {/* Page-5 Begins */}
      <HomeMission />
      {/* Page-5 ENDS */}
      <Footer />
    </Container>
  );
};
