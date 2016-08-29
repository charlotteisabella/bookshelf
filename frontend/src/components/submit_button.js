import React, { PropTypes } from 'react'
import styles from "./submit_button.css"
import CSSModules from "react-css-modules"

const SubmitButton = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Submit
    </button>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SubmitButton
export default CSSModules(SubmitButton, styles);
