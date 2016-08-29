import React, { PropTypes } from 'react'
import styles from "./title_input.css"
import CSSModules from "react-css-modules"

const TitleInput = () => {
  return (
    <input type="text" styleName="text-input"></input>
  );
};

TitleInput.propTypes = {
  title: PropTypes.string.isRequired
}

export default TitleInput
export default CSSModules(TitleInput, styles);
