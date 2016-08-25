import React from "react";
import styles from "./table.css"
import CSSModules from "react-css-modules"
import DeleteButton from "./delete_button"
import EditButton from "./edit_button"
import RatingDisplay from "./rating_display"
import TitleDisplay from "./title_display"

const TableBody = () => {
  return (
    <tr>
      <td><TitleDisplay/></td>
      <td><RatingDisplay/></td>
      <td><EditButton/></td>
      <td><DeleteButton/></td>
    </tr>
  );
};

export default CSSModules(TableBody, styles);