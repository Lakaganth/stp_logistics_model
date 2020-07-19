import styled from "styled-components";
import media from "styled-media-query";
import AdvantageHero from "../../assets/advantage_hero.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const AdvantageHeroContainer = styled.div`

  .curved-container {
    width: 100%;
    height: 120vh;    
    background:url('${AdvantageHero}') no-repeat center center fixed;
    background-size: cover;  
    border-radius: 0px 0px 150px 150px;
    text-align: center;
    padding: 20vh 15vw; 
    ${media.lessThan("small")`
    background: linear-gradient(180deg, #5928BE 0%, rgba(89, 40, 190, 0.59) 100%);
  `}

    ${media.between("small", "1280px")`
    /* screen width is between 450px and 768px (small to medium) */
    padding: 15vh 15vw; 
  `}




    .title {
      font-family: Red Hat Display;
      font-style: normal;
      font-weight: bold;
      font-size: 54px;
      line-height: 71px;
      text-transform: uppercase;
      color: #ffb904;
      
    }
   .content {
      font-family: Red Hat Display;
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
      color: #e1e1e1;
      padding: 25px 0;
    }
  }
`;

export const AdvantageBoxPage = styled.div`
  width: 100vw;
  padding: 10vh 0;
  overflow: hidden;

  .advantage-4 {
    padding: 10vh 5vw;
    img {
      width: 100%;
    }
    ${media.lessThan("small")`
    padding: 10vh 1vw;
    img{
      width: 100%;
    }
  `}

    .content-div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      overflow: hidden;
      .content4 {
        p:nth-child(1) {
          font-family: Red Hat Display;
          font-style: normal;
          font-weight: bold;
          font-size: 42px;
          line-height: 56px;
          text-transform: uppercase;
          color: #ffb904;
          padding: 30px 0;
        }
        p:nth-child(2) {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 29px;
          color: #4a4949;
        }
      }
    }
  }
`;

export const AdBox = styled.div`
  padding: 10vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  ${media.lessThan("small")`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  `}

  ${media.between("small", "780px")`
  display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  `}

  img {
    width: 100%;
  }

  .content {
    padding: 0 5vw;
    p:nth-child(1) {
      font-family: Red Hat Display;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 56px;
      text-transform: uppercase;
      color: #ffb904;
      padding: 30px 0;
    }
    p:nth-child(2) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #4a4949;
    }
  }
`;
