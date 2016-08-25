import React from "react";
import styles from "./table.css"
import CSSModules from "react-css-modules"
import TableBody from "./table_body"
import TableHead from "./table_head"

const Table = () => {
  return (
    <table>
      <thead>
        <TableHead/>
      </thead>
      <tbody>
        <TableBody/>
      </tbody>
    </table>
  );
};

export default CSSModules(Table, styles);