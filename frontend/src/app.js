import React from "react"
import TitleInput from "./components/title_input"
import RatingInput from "./components/rating_input"
import TableHead from "./components/table_head"
import Table from "./components/table"

export default function App() {
  return(
    <div>
      <Table/>
      <TitleInput/>
      <RatingInput/>
    </div>
  );
}
