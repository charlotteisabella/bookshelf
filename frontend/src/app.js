import React from "react"
import bookShelf from './redux/store/bookshelf'
import Inputs from "./containers/inputs"
import Table from "./containers/table"

export default function App() {
  return(
    <div>
      <Table/>
      <Inputs/>
    </div>
  );
}
