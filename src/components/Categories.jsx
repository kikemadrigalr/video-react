import React, { Children } from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children }) => (
  <React.Fragment>
    <section className="categories">
      <h3 className="categories__title">Mi Lista</h3>
      {children}
    </section>
  </React.Fragment>
);

export default Categories;
