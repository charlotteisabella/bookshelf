import React from "react";
import styles from "./title_input.css"
import CSSModules from "react-css-modules"

const TitleInput = () => {
  return (
    <input type="text" styleName="text-input"></input>
  );
};

export default CSSModules(TitleInput, styles);
