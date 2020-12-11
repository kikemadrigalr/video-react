import React from "react";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children }) => (
  <React.Fragment>
    <div className="carousel">
      <div className="carousel__container">{children}</div>
    </div>
  </React.Fragment>
);

export default Carousel;
