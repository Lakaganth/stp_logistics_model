import React from "react";
import { AdvantageBoxPage, AdBox } from "./AdvantageStyle";
import Advantage1 from "../../assets/advantage1.png";
import Advantage2 from "../../assets/advantage2.png";
import Advantage3 from "../../assets/advantage3.png";
import Advantage4 from "../../assets/advantage4.png";
import ScrollAnimation from "react-animate-on-scroll";

export const AdvantageBox = () => {
  return (
    <AdvantageBoxPage>
      <AdBoxAB
        AdImage={Advantage1}
        AdTitle="Coverage Area"
        AdContent="Our own distribution center and trade point areas are enhanced by screened cross-dock and stockroom across the country, which permits our delivery fleet to go around the country to meet the requirement. This one of a kind preferred position permits us to give excellent speed and administration — regardless of where your package is going."
      />
      <AdBoxBA
        AdImage={Advantage2}
        AdTitle="Quick Turnaround"
        AdContent="Our specialists, well equipped vehicles and end-to-end services all work to simplify the shipping and delivery process, to make your customers delighted with quicker turnaround time."
      />
      <AdBoxAB
        AdImage={Advantage3}
        AdTitle="Full Visibility"
        AdContent="STP’s trustworthy real-time tracking shows the movement of your shipment and helps you to avoid any delays or missed transference. Our application enables you to receive real-time updates on the end-to-end tracking of your shipment as it travels downstream towards the destination"
      />
      <div className="advantage-4">
        <div className="content-div">
          <div></div>
          <div className="content4">
            <p>Diversified Fleet</p>
            <p>
              STP’s diverse fleet options ensure your package is well taken care
              of – regardless of your unique need. Our vehicle choices range
              from 5-ton truck to a car to give the right level of care and the
              fastest turnaround conceivable.
            </p>
          </div>
        </div>
        <img src={Advantage4} alt="Advantage" />
      </div>
    </AdvantageBoxPage>
  );
};

const AdBoxAB = ({ AdImage, AdTitle, AdContent }) => {
  return (
    <AdBox>
      <ScrollAnimation animateIn="fadeInLeftBig" animateOnce="true">
        <img src={AdImage} alt="Advantages" />
      </ScrollAnimation>

      <div className="content">
        <p>{AdTitle}</p>
        <p>{AdContent}</p>
      </div>
    </AdBox>
  );
};
const AdBoxBA = ({ AdImage, AdTitle, AdContent }) => {
  return (
    <AdBox>
      <div className="content">
        <p>{AdTitle}</p>
        <p>{AdContent}</p>
      </div>
      <ScrollAnimation animateIn="fadeInRightBig" animateOnce="true">
        <img src={AdImage} alt="Advantages" />
      </ScrollAnimation>
    </AdBox>
  );
};
