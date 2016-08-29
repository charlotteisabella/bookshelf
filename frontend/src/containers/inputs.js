import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/books'
import TitleInput from "../components/title_input"
import RatingInput from "../components/rating_input"
import SubmitButton from "../components/submit_button"

let Inputs = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addBook(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}
Inputs = connect()(Inputs)
export default Inputs
