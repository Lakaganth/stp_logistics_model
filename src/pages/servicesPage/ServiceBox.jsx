import React from "react";
import { ServiceBoxPageContainer, SerBox } from "./ServiceStyles";
import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";
import Service4 from "../../assets/service4.png";

export const ServiceBoxPage = () => {
  return (
    <ServiceBoxPageContainer>
      <ServiceBoxAB
        serviceImage={Service1}
        serviceTitle=" Door step delivery"
        serviceSubtitle="From warehouse to welcome mat."
        serviceText="We are focused on handling all your packages with utmost care from the warehouse till the time of drop off at the customer’s doorstep, providing with full transparency."
      />
      <ServiceBoxBA
        serviceImage={Service4}
        serviceTitle="Warehousing"
        serviceSubtitle="Our warehousing helps people, helps business!"
        serviceText="STP has warehouses located throughout Canada which ensures better transit of goods, diminishing the time it takes to move items between places, reaching the customer’s on time."
      />
      <ServiceBoxAB
        serviceImage={Service2}
        serviceTitle="E-Commerce Delivery"
        serviceSubtitle="We customize our solutions according to your delivery needs."
        serviceText="We manage multiple activities back in the warehouse, needed to get your product to your customers, enabling you to focus on growing your business."
      />
      <ServiceBoxBA
        serviceImage={Service3}
        serviceTitle="Sortation Services"
        serviceSubtitle="Fulfilling your customer’s need starts in the warehouse"
        serviceText="Our specialists pick and pack up to 20,000 packages every night – per warehouse – getting them ready for the same day or next day’s delivery."
      />
    </ServiceBoxPageContainer>
  );
};

const ServiceBoxAB = ({
  serviceImage,
  serviceTitle,
  serviceSubtitle,
  serviceText,
}) => {
  return (
    <SerBox>
      <div className="serImg">
        <img src={serviceImage} alt="Services" />
      </div>
      <div className="content">
        <p>{serviceTitle}</p>
        <p>{serviceSubtitle}</p>
        <p>{serviceText}</p>
      </div>
    </SerBox>
  );
};
const ServiceBoxBA = ({
  serviceImage,
  serviceTitle,
  serviceSubtitle,
  serviceText,
}) => {
  return (
    <SerBox>
      <div className="content">
        <p>{serviceTitle}</p>
        <p>{serviceSubtitle}</p>
        <p>{serviceText}</p>
      </div>
      <div className="serImg">
        <img src={serviceImage} alt="Services" />
      </div>
    </SerBox>
  );
};
