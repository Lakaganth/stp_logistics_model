import styled, { keyframes } from "styled-components";
import media from "styled-media-query";
import Bg from "../../assets/bg.png";

import fadeInDown from "react-animations/lib/fadeInDown";
import bounceInUp from "react-animations/lib/bounceInUp";

export const Container = styled.div`
  width: 100vw;
`;

const HeroContainerFadeInDownAnimation = keyframes`${fadeInDown}; 
opacity:1;`;
const HeroContentFade = keyframes`${bounceInUp} `;
const HeroImageFade = keyframes`${fadeInDown} `;

export const HeroContainer = styled.div`

border-radius: 0 0 150px 150px;
background:url('${Bg}') no-repeat center center fixed;
background-size: cover;

padding: 10vh 0;
display:grid;
grid-template-columns: 1fr 1fr;
justify-items:center;
align-items:center;
overflow: hidden;
animation: .5s ${HeroContainerFadeInDownAnimation};

${media.lessThan("small")` 
   display:flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items:flex-start;
   background:url('${Bg}') no-repeat center top fixed;
   `} 
  


.hero-content{
    text-align:left;

    padding: 5vh 0 0 2vw;

    ${media.lessThan("small")` 
    margin-left: 20px;
    width: 70%;
   `}

   ${media.between("small", "1400px")`
     margin-left: 10px;
    width: 70%;
  `}
 


  p:nth-child(2){
        font-family: Red Hat Text;
        font-style: normal;
        font-weight: normal;
        font-size: 62px;
        line-height: 56px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 0 0 20px 0;
        animation: 1s ${HeroContentFade};        
    animation-delay: 0s;
    ${media.lessThan("small")` 
    font-size: 32px;
    line-height: 30px;
    margin: 0 0 10px 0;
   `}
   ${media.between("small", "1400px")`
   font-size: 32px;
    line-height: 30px;
    margin: 0 0 10px 0;
  `}

    }

    p:nth-child(3){
        font-family: Red Hat Text;
        font-style: normal;
        font-weight: bold;
        font-size: 62px;
        line-height: 56px;
        text-transform: uppercase;
        color: #C7ACFF;
        margin: 0 0 70px 0;
        animation: 1s ${HeroContentFade};
    animation-delay: 0.2s;
    ${media.lessThan("small")` 
    font-size: 34px;
    margin: 0 0 10px 0;
   `}
   ${media.between("small", "1400px")`
   font-size: 34px;
    margin: 0 0 10px 0;
  `}

    }
    p:nth-child(4){
        font-family: Red Hat Text;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 42px;
        color: #FFFFFF;
        margin: 0 0 70px 0;
        animation: 1s ${HeroContentFade};
        width: 60%;
    animation-delay: 0.3s;
    ${media.lessThan("small")` 
    font-size: 22px;
    line-height: 22px;
    margin: 0 0 30px 0;
    width: 80%;
   `}
   ${media.between("small", "1400px")`
   font-size: 22px;
    line-height: 22px;
    width: 80%;
    margin: 0 0 30px 0;
  `}
  
       
    }
    button{
        width: 307px;
        height: 73px;
        background: linear-gradient(290.87deg, #E9AA0A 26.58%, #FFC163 95.68%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border:none;
        border-radius: 10px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
        animation: 1s ${HeroContentFade};
    animation-delay: 0.4s;
    a{
      color: #FFFFFF;
    }
    ${media.lessThan("small")` 
    width: 175px;
        height: 50px;
        font-weight: 400;        
   `}
   ${media.between("small", "1400px")`
   width: 175px;
        height: 50px;
        font-weight: 400;    
  `}

    }

 


}
.hero-img{
  /* opacity:0; */
      animation: 1s ${HeroImageFade};
    animation-delay: 0.1s;
    ${media.lessThan("small")` 
    img{
    margin: 0 20%;
    width: 70%;
    }     
   `}

   ${media.between("small", "780px")`
   img{
    margin: 0 0%;
    width: 100%;
    }     
  `}

  ${media.between("781px", "1400px")`
  img{
    margin: 0 0%;
    width: 100%;
    }   
  `}
} 
`;

export const HeroTrailing = styled.div`
  /* height: 20vh; */
  margin-top: 5vh;
  ${media.lessThan("small")`
  margin-top: 2vh;
  `}

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 52px;
    line-height: 63px;
    text-align: center;
    ${media.lessThan("small")`
    font-size: 32px;
    line-height: 33px;
    padding: 0 10vw;
  `}
  }
  p:nth-child(2) {
    color: #ffb904;
    font-weight: bold;
  }
`;

export const FeatureGrid = styled.div`
  margin: 20vh 0vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  overflow: hidden;
  ${media.lessThan("small")`
  display:flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   margin: 3vh 0;
  `}
  ${media.between("small", "large")`
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   margin: 10vh 0;   
  `}
`;

export const FeatureBox = styled.div`
  width: 340px;
  height: 580px;
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25),
    -5px -4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  text-align: center;
  transition: all 0.3s ease-in-out;
  margin: 3vh auto;

  ${media.lessThan("small")`
   margin: 3vh auto;
  `}

  ${media.between("small", "large")`
  margin: 3vh auto;
  `}

  p:nth-child(2) {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    padding: 20px 30px;
    color: #3a3a3a;
  }
  p:nth-child(3) {
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    padding: 20px 30px;
    color: #646368;
  }

  button {
    width: 233px;
    height: 66px;
    background: linear-gradient(180deg, #e9b120 0%, #ffde8a 100%);
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
  }

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(212.14deg, #382587 8.13%, #5d46b9 97.86%);
    p:nth-child(2) {
      color: #fff;
    }
    p:nth-child(3) {
      color: #cdc1ff;
    }
  }
`;

export const QualityContainer = styled.div`
  width: 100vw;
  padding-bottom: 20vh;
  background: linear-gradient(127.36deg, #3d1494 2.65%, #6a51a2 96.87%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 150px 150px 0px 0px;
  overflow: hidden;

  ${media.lessThan("small")`
  padding-bottom: 0vh;
  `}

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 63px;
    text-align: center;
    ${media.lessThan("small")`
    font-size: 32px;
    line-height: 53px;
    padding: 0 10vw; 
  `}
  }
  p:nth-child(1) {
    color: #ffffff;
    padding-top: 20vh;
  }
  p:nth-child(2) {
    color: #fbaf3e;
  }
  .quality-grid {
    margin: 10vh 5vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${media.lessThan("small")`
    display:flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;  
  `}
    ${media.between("small", "1300px")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  `}
  }
`;

export const QualityBox = styled.div`
  width: 299px;
  height: 329px;
  background: #f9f7f7;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:nth-child(2) {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #000000;
    margin: 2vh 0;
    padding: 0 20px;
  }
  p:nth-child(3) {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #646368;
    padding: 0 20px;
  }

  ${media.lessThan("small")`
   margin: 5vh auto;
  `}
  ${media.between("small", "1300px")`
  margin: 5vh auto;
  `}
`;

export const HomeOperationContainer = styled.div`
  padding: 10vh 2vw;
  overflow: hidden;
  ${media.lessThan("small")`
  padding: 1vh 2vw;
  `}

  .title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 66px;
    text-align: center;
    color: #000000;
    span {
      color: #e9a100;
    }
  }
`;

export const OperationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin: 0 2vw;
  ${media.lessThan("small")`
   display:none;  
  `}
  ${media.between("small", "1500px")`
  display: none;   
  `}
  img {
    justify-self: flex-start;
  }
`;

export const MobileOperationGrid = styled.div`
  display: none;
  ${media.lessThan("small")`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  padding: 0 2vw;
  img{
    width:100%;
  }  
  `}
  ${media.between("small", "1500px")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  padding: 0 2vw;
  img{
    width:100%;
  }  
  `}
`;

export const OpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-self: flex-start;
  width: 60%;
  ${media.lessThan("small")`
  width: 90%;
  `}
  ${media.between("small", "1500px")`
  width: 90%;
  `}

  p:nth-child(1) {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 66px;
    text-align: center;
    color: #502d9b;
    ${media.lessThan("small")`
    font-size: 34px;
    line-height: 36px;
    margin: 2vh 0;
  `}
  }
  p:nth-child(2) {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #646368;

    ${media.lessThan("small")`
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;
    margin: 1vh 0;

  `}
  }
`;

export const MissionContainer = styled.div`
  width: 100vw;
  padding: 10vh 0;
  overflow: hidden;

  background: linear-gradient(
    128.76deg,
    #411a95 -2.71%,
    rgba(141, 100, 227, 0.74) 94.12%
  );
  border-radius: 0px 0px 150px 150px;

  .title {
    padding: 5vh 0;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 66px;
    /* identical to box height */

    color: #ffffff;
    span {
      color: #e9a100;
    }
  }

  .mission-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    ${media.lessThan("small")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  img{
    width:100%;
  }  
  `}
    ${media.between("small", "1200px")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  img{
    width:95%;
  } 
  `}
  }

  .statement {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 43px;
    color: #ffffff;
    p {
      padding: 5vh 5vw;
    }
    ${media.lessThan("small")`
    font-size: 24px;
    line-height: 30px;
  `}
  }
`;
