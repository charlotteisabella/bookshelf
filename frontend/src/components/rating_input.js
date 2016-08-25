import React from "react";
import styles from "./title_input.css"
import CSSModules from "react-css-modules"

const RatingInput = () => {
  return (
    <select value="A">
      <option value="A">1</option>
      <option value="B">2</option>
      <option value="C">3</option>
      <option value="C">4</option>
      <option value="C">5</option>
    </select>
  );
};

export default CSSModules(RatingInput, styles);
