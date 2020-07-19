import React from "react";
import {
  HomeOperationContainer,
  OperationGrid,
  OpContent,
  MobileOperationGrid,
} from "./HomeStyles";
import Op1 from "../../assets/operation1.png";
import Op2 from "../../assets/operation2.png";
import Op3 from "../../assets/operation3.png";
import ScrollAnimation from "react-animate-on-scroll";

export const HomeOperation = () => {
  return (
    <HomeOperationContainer>
      <p className="title">
        How We <span>Operate</span>
      </p>

      <OperationGrid>
        <ScrollAnimation animateIn="zoomInLeft">
          <img src={Op1} alt="Fast Delivery" />
        </ScrollAnimation>
        <OperationContent
          opTitle="Super-fast Delivery"
          opContent="STP logistics assures delivery on priority across the country which is custom made for the seamless conveyance."
        />
        <OperationContent
          opTitle="Deliver Documents & Packages"
          opContent="Whether you need a business document delivered to a client or you want to send a gift to a friend, we got you covered!"
        />
        <ScrollAnimation animateIn="slideInRight">
          <img
            src={Op2}
            alt="Deliver
            Documents 
            & Packages"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInUp">
          <img
            src={Op3}
            alt="Warehouse
          Fulfillment"
          />
        </ScrollAnimation>
        <OperationContent
          opTitle="Warehouse
          Fulfillment"
          opContent="Our warehouse provides companies across the country with cost-effective distribution and eCommerce fulfillment services."
        />
      </OperationGrid>
      <MobileOperationGrid>
        <ScrollAnimation animateIn="zoomInLeft">
          <img src={Op1} alt="Fast Delivery" />
        </ScrollAnimation>
        <OperationContent
          opTitle="Super-fast Delivery"
          opContent="STP Logistics assures delivery on priority across the country which is custom made for the seamless conveyance."
        />
        <ScrollAnimation animateIn="slideInRight">
          <img
            src={Op2}
            alt="Deliver
            Documents 
            & Packages"
          />
        </ScrollAnimation>
        <OperationContent
          opTitle="Deliver
          Documents 
          & Packages"
          opContent="Whether you need a business document delivered to a client or you want to send a gift to a friend, we got you covered!"
        />
        <ScrollAnimation animateIn="slideInLeft">
          <img
            src={Op3}
            alt="Warehouse
          Fulfillment"
          />
        </ScrollAnimation>
        <OperationContent
          opTitle="Warehouse
          Fulfillment"
          opContent="Our warehouse provides companies across the country with cost-effective distribution and eCommerce fulfillment services."
        />
      </MobileOperationGrid>
    </HomeOperationContainer>
  );
};

const OperationContent = ({ opTitle, opContent }) => {
  return (
    <OpContent>
      <p>{opTitle}</p>
      <p>{opContent}</p>
    </OpContent>
  );
};
