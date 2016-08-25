import React from "react";
import styles from "./table_head.css"
import CSSModules from "react-css-modules"

const TableHead = () => {
  return (
    <tr>
      <th>Title</th>
      <th>Rating</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
  );
};

export default CSSModules(TableHead, styles);
