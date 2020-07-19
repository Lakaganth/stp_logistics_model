import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Delivery from "../../src/assets/under_construction.png";
import Cone from "../../src/assets/construction_cone.png";

export const UnderConstruction = () => {
  return (
    <Container>
      <Grid>
        <div className="content">
          <img src={Cone} alt="ConstrucitonCone" />
          <p>Please come back soon</p>
        </div>
        <div className="image">
          <img src={Delivery} alt="Delivery-ok" />
        </div>
      </Grid>
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;

  background: linear-gradient(180deg, #170550 0%, #3e0764 100%);
`;
export const Grid = styled.div`
  padding: 20vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  p {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 89px;
    text-transform: uppercase;
    color: #fffdfd;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 5vw;
  }

  ${media.lessThan("small")` 
  display: grid;
  grid-template-columns: 1fr;
  p{
      text-align:center;
      padding: 5vh 0;
  }

.image{
    img{
        width:80%;
        margin: 0 auto;
        padding-left: 20vw;
    }
}

   `}

  ${media.between("small", "900px")` 


.image{
    img{
        width:80%;
        margin: 0 auto;
    }
}

   `}
`;
