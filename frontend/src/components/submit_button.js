import React from "react";
import styles from "./edit_button.css"
import CSSModules from "react-css-modules"

const SubmitButton = () => {
  return (
    <button>Submit</button>
  );
};

export default CSSModules(SubmitButton, styles);
