import React, { PropTypes } from 'react'
import styles from './delete_button.css';
import CSSModules from "react-css-modules"

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Delete
    </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CSSModules(DeleteButton, styles)
