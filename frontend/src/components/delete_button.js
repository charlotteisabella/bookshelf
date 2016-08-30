import React, { PropTypes } from 'react'
import CSSModules from "react-css-modules"

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      DeleteButton
    </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteButton
