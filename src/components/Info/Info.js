import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Info.css";
import InfoCard from "../InfoCard/InfoCard";

const Info = () => (
  <div className="w-90 center">
    <InfoCard>
      <p className="pa4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa,
        quaerat ex laudantium pariatur libero veritatis dolorum, neque, iste
        sint a? Corporis cum perferendis quos ab vel aut doloribus accusamus.
      </p>
    </InfoCard>
  </div>
);

export default Info;
