import React, { PropTypes } from 'react'
import CSSModules from "react-css-modules"
import styles from "./edit_button"

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Edit
    </button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CSSModules(EditButton, styles)
