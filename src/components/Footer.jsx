import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <a href="/">Terminos de uso</a>
        <a href="/">Declaración de privacidad</a>
        <a href="/">Centro de ayuda</a>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
