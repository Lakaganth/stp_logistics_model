import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import AboutBG from "../../assets/about_hero.png";

export const AboutPage = () => {
  return (
    <Container>
      <AboutHero>
        <div className="intro">
          <p className="title">About Us</p>
          <p>
            When Canadian businesses need a reliable, cost-effective and
            traceable way to ship its packages and documents across Canada, the
            call goes out to STP Logistics INC.
          </p>
        </div>
        <img className="about-hero-img" src={AboutBG} alt="About" />
        <div className="content">
          <p>
            The most important element in developing a successful business is a
            well structured foundation. This requires proper network of people,
            the right location and of course the right numbers. (It all comes
            down to the dollar sign). When it comes to shipping and receiving
            packages it’s all about cheaper, faster and most reliable. Steadfast
            meets all these requirements and so much more. STP Logistics Inc.
            recognizes the value in your business so we provide that extra value
            for your money.
          </p>
        </div>
      </AboutHero>
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;
  background: linear-gradient(180deg, #4c3a92 0%, #211748 100%);
  overflow: hidden;
`;

export const AboutHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10vh 0vw;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;

  ${media.lessThan("small")`
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items:center;
     font-size: 20px;
     line-height: 39px;
  `}

  ${media.between("small", "1480px")`
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items:center;
     font-size: 32px;
     line-height: 39px;
  `}


  .about-hero-img {
    margin-bottom: 10vh;
    ${media.lessThan("small")`
    width: 90%;
    margin-bottom: 0vh;
    overflow:hidden;
  `}
    ${media.between("small", "1480px")`
     width: 80%;
    margin-bottom: 0vh;
    overflow:hidden;
  `}
  }

  .title {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 71px;
    text-transform: uppercase;
    color: #ffb904;
  }

  .intro {
    padding: 10vh 0vw 0 3vw;
    ${media.lessThan("small")`
    padding: 10vh 5vw 0 5vw;
    width: 90%;
  `}
    ${media.between("small", "1480px")`
  width: 90%;
  `}
  }
  .content {
    padding: 15vh 5vw 0 0vw;
    ${media.lessThan("small")`
    padding: 3vh 3vw 0 5vw;
    width: 90%;
  `}
    ${media.between("small", "1480px")`
  width: 90%;
  padding: 3vh 3vw 0 5vw;
  `}
  }
`;
