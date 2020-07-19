import React from "react";
import styled, { keyframes } from "styled-components";
// import styled from "styled-components";
import NavLogo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import media from "styled-media-query";
import { animated, useSpring } from "react-spring";
import MobileLogo from "../../assets/mobile_logo.svg";
import MobileMenu from "../../assets/mobile_menu.svg";
import MobileMenuClose from "../../assets/mobile_menu_close.svg";
import { fadeInLeft } from "react-animations/lib/fadeInLeft";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const mobilemenuAnimation = useSpring({
    transform: mobileMenu ? `translate3d(0,0,0)` : `translate3d(100vw,0,0)`,
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <Container>
      <Grids>
        <NavLink to="/">
          <div className="nav-logo">
            <img src={NavLogo} alt="Stedfasts" />
          </div>
        </NavLink>
        <div></div>
        <div></div>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/advantage">OUR ADVANTAGE</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Grids>
      <MobileNavbar>
        <div className="mobile-nav-logo">
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            <img src={MobileLogo} alt="Nav logo" style={{ width: "110%" }} />
          </NavLink>
        </div>
        <button className="menuButton" onClick={handleMobileMenu}>
          <img src={MobileMenu} alt="mobile menu" style={{ width: "100%" }} />
        </button>
        {mobileMenu ? (
          <MobileMenuBox style={mobilemenuAnimation}>
            <div className="closemenu">
              <button onClick={handleMobileMenu}>
                <img src={MobileMenuClose} alt="hamburger" />
              </button>
            </div>
            <NavLink to="/services">
              <buttton onClick={handleMobileMenu}>SERVICES</buttton>
            </NavLink>
            <NavLink to="/advantage">
              <buttton onClick={handleMobileMenu}>OUR ADVANTAGE</buttton>
            </NavLink>
            <NavLink to="/about">
              <buttton onClick={handleMobileMenu}>ABOUT</buttton>
            </NavLink>
            <NavLink to="/contact">
              <buttton onClick={handleMobileMenu}>Contact</buttton>
            </NavLink>
          </MobileMenuBox>
        ) : null}
      </MobileNavbar>
    </Container>
  );
};

const Container = styled.div`
  height: 10vh;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  z-index: 50;
  font-size: 1.6rem;

  a {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #e5daff;
  }

  .nav-logo {
    padding-top: 10px;
    /* width: 280px;
    height: 280px; */
  }
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:none;
  `}
  ${media.between("small", "780px")`
    /* screen width is between 450px and 768px (small to medium) */
    display:none;
  `}
  ${media.between("781px", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: 95%;
  `}

  a{
    padding:0 20px;
  }

`;

const MobileNavbar = styled.div`
  display: none;
  button {
    background: none;
    border: none;
    outline: none;
  }
  button:active,
  button:focus {
    outline: none;
    outline: 0;
  }

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display:flex;    
    position:relative;
    width:100vw;
    .menuButton{
       justify-content: flex-end;      
        position: absolute;
        top: 25px;
        right: 20px;      
       }
    .mobile-nav-logo{
      display:flex;
      position: relative;
      top:10px;
      left:30px;
      img{
        width:100%;
        /* height:80%; */
      }
    }     
  `}
  ${media.between("small", "780px")`
  display:flex;    
    position:relative;
    width:100vw;
    .menuButton{
       justify-content: flex-end;      
        position: absolute;
        top: 25px;
        right: 20px;      
       }
    .mobile-nav-logo{
      display:flex;
      position: relative;
      top:10px;
      left:30px;
      img{
        width:100%;
        /* height:80%; */
      }
    }     
  `}
`;

const MobileMenuOpen = keyframes`${fadeInLeft} `;

const MobileMenuBox = styled(animated.div)`
  ${media.lessThan("small")`
 display:flex;
 flex-direction:column;
 width: 100vw;
 height: 80vh;
 background: purple;
 z-index: 10;
 border-radius: 0px 0 0 150px;
 padding: 15vh 10vw;
 animation: 1s ${MobileMenuOpen};
 transition: transform .3s
              cubic-bezier(0, .52, 0, 1);

position:relative;
 .closemenu{
   position:absolute;
   top: 30px;
   right: 30px;
   img{
   width:150%;
   }
 }
 a{
   margin: 2.5vh 10vw;
   font-size: 32px;
 }

  `}
  ${media.between("small", "780px")`
  display:flex;
 flex-direction:column;
 width: 100vw;
 height: 80vh;
 background: purple;
 z-index: 10;
 border-radius: 0px 0 0 150px;
 padding: 15vh 10vw;
 animation: 1s ${MobileMenuOpen};
 transition: transform .3s
              cubic-bezier(0, .52, 0, 1);

position:relative;
 .closemenu{
   position:absolute;
   top: 30px;
   right: 30px;
   img{
   width:150%;
   }
 }
 a{
   margin: 2.5vh 10vw;
   font-size: 32px;
 }
  `}
`;
