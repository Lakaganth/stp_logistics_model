import React from "react";
import { Container, AdvantageHeroContainer } from "./AdvantageStyle";
import { AdvantageBox } from "./AdvantageBox";
import ScrollAnimation from "react-animate-on-scroll";
import { Footer } from "./../../components/UI/Footer";

export const AdvantagePage = () => {
  return (
    <Container>
      <AdvantageHeroContainer>
        <div className="curved-container">
          <ScrollAnimation animateIn="zoomIn" animateOnce="true">
            <p className="title">Our Advantage</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" delay="600" animateOnce="true">
            <p className="content">
              Our four key points of interest are the pillars of excellence that
              set us apart. We aim to provide outstanding administrations to our
              customers so they can expand the scope of their product and their
              brand, and ultimately develop their business.
            </p>
          </ScrollAnimation>
        </div>
        {/* <img src={AdvantageHero} alt="Advantage" /> */}
      </AdvantageHeroContainer>
      <AdvantageBox />
      <Footer />
    </Container>
  );
};
