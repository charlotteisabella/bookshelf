import React, { Component } from "react";
import styles from "./table_body.css"
import CSSModules from "react-css-modules"
import DeleteButton from "../components/delete_button"
import EditButton from "../components/edit_button"
import RatingDisplay from "../components/rating_display"
import TitleDisplay from "../components/title_display"

class TableBody extends Component {
  render() {
    console.log(state)
    return (
      <tr>
        <td><TitleDisplay/></td>
        <td><RatingDisplay/></td>
        <td><EditButton/></td>
        <td><DeleteButton/></td>
      </tr>
    )
  }
};

export default CSSModules(TableBody, styles);
