import React from "react";
import styles from "./delete_button.css"
import CSSModules from "react-css-modules"

const DeleteButton = () => {
  return (
    <button>Delete</button>
  );
};

export default CSSModules(DeleteButton, styles);
