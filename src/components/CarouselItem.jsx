import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <React.Fragment>
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  </React.Fragment>
);

//validar el tipo de datos que recibe el componente con proptypes
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

// Component.propTypes = {
//   name: PropTypes.string.isRequired, // obligatorio
//   lastName: PropTypes.string.isRequired, // obligatorio
//   age: PropTypes.number, // opcional,
//   list: PropTypes.array, // opcional
// };

export default CarouselItem;
