import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Linkedin from "../../assets/flinkedin.svg";
import Facebook from "../../assets/ffacebook.svg";
import Twitter from "../../assets/ftwitter.svg";
import Phone from "../../assets/fphone.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <ContactGrid>
        <SocialDiv>
          <div className="social-row">
            <a href="/">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="/">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a href="/">
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
          <div className="phone">
            <img src={Phone} alt="Phone" />
            <p>1-905-470-1928</p>
          </div>
        </SocialDiv>
        <AddressDiv>
          <p>
            STP Logistics <br />
          </p>
        </AddressDiv>
      </ContactGrid>
      <p> &#169; Copyright STP Logistics Inc. 2020.</p>
    </FooterContainer>
  );
};

export const FooterContainer = styled.div`
  width: 100vw;
  background: linear-gradient(180deg, #7350bf 0%, #9b7cdf 100%);
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;
  margin: 10vh 0 0 0;

  p {
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    ${media.lessThan("small")`
    font-size: 24px;
    line-height: 29px;
  `}
  }
`;
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5vh 0;
  ${media.lessThan("small")`
  grid-template-columns: 1fr ;
  `}
`;
export const SocialDiv = styled.div`
  .social-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 5vh 10vw;
  }
  .phone {
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      padding: 0vh 0vw 0 8vw;
    }
    p {
      padding: 0vh 15vw 0 0vw;
    }
  }
`;
export const AddressDiv = styled.div`
  p {
    text-align: left;
    padding: 5vh 0 0 5vw;
    ${media.lessThan("small")`
    text-align: center;
  `}
  }
`;
