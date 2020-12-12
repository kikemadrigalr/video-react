import React, { Children } from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title }) => (
  <React.Fragment>
    <section className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </section>
  </React.Fragment>
);

export default Categories;
