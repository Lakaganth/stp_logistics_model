import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import ContactHero from "../../assets/contact_hero.png";
// import ContactBG from "../../assets/contact-bg.png";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linkedin.svg";

export const ContactPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <Container>
      <ContactContent>
        <p className="title">Contact Us</p>
        <div className="contact-form">
          <FormBox>
            <InputGroup>
              <input
                className="name-input"
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(name) => setName(name.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <input
                className="email-input"
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(email) => setEmail(email.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Subject"
                onChange={(subject) => setSubject(subject.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <textarea
                className="message-input"
                name="message"
                value={message}
                placeholder="Message"
                onChange={(message) => setMessage(message.target.value)}
              />
            </InputGroup>
            <button>Submit</button>
            <SocialRow>
              <a href="/">
                <img src={Facebook} alt="Facebook" style={{ width: "75px" }} />
              </a>
              <a href="/">
                <img src={Twitter} alt="Facebook" style={{ width: "75px" }} />
              </a>
              <a href="/">
                <img src={LinkedIn} alt="Facebook" style={{ width: "75px" }} />
              </a>
            </SocialRow>
          </FormBox>
        </div>
      </ContactContent>
      <img src={ContactHero} alt="Contact" />
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */
  padding: 10vh 0;
  background: linear-gradient(
    230.28deg,
    #0e1829 18.28%,
    rgba(35, 91, 173, 0.65) 110.11%
  );

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  ${media.lessThan("small")`    
    display:flex;
    flex-direction:column-reverse;
    justify-content: center;
    align-items:center;
    padding: 10vh 0;
    img{
      width:100%;
    }
  `}

  ${media.between("small", "1280px")`
  display:flex;
    flex-direction:column-reverse;
    justify-content: center;
    align-items:center;
    padding: 10vh 0;
    img{
      width:100%;
    }
  `}
`;

export const ContactContent = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 71px;
    text-transform: uppercase;
    color: #ffb904;
    padding: 5vh 0vw;
  }
  .contact-form {
    width: 40vw;
    /* height: 70vh; */
    background: #fbfbfb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    ${media.lessThan("small")`
    width: 100%;
    height: 80vh;
  `}

    ${media.between("small", "1280px")`
    width: 80vw;
    /* height: 80vh; */
  `}
  }
`;
const FormBox = styled.form`
  padding-top: 3vh;

  button {
    background: linear-gradient(290.87deg, #e9aa0a 26.58%, #ffc163 95.68%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
    width: 50%;
    height: 50px;
    margin: 0 25%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    ${media.lessThan("small")`
    height: 50px; 
    padding: 0 5vw;
  `}
    ${media.between("small", "1280px")`
    width: 100%
    margin : 10vh 45vw;    
    padding: 0 5vw;
    
  `}
  }
`;

const InputGroup = styled.div`
  width: 80%;
  margin: 0vh auto;
  font-family: Montserrat;

  ${media.lessThan("small")`
  width: 90%;
  `}
  ${media.between("small", "780px")`
  width: 90%;
  `}

  input {
    width: 100%;
    height: 5vh;
    margin: 10px 0;
    padding: 0vh 1vw;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-size: 28px;
  }
  textarea {
    font-family: Montserrat;
    width: 100%;
    height: 25vh;
    margin: 1vh 0;
    padding-left: 2vw;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 1vh;
    font-size: 22px;
  }
`;

const SocialRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  padding: 2vh 0;
  ${media.lessThan("small")`
  padding: 5vh 0;
  `}
`;
