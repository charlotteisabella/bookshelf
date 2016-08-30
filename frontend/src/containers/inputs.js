import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/books'

let Inputs = ({ dispatch }) => {
  let input
  let select
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addBook(input.value, select.value))
        input.value = ''
        select.value = 1
      }}>

        <input ref={node => {
          input = node
        }} />

        <select ref={node => {
          select = node
        }} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}
Inputs = connect()(Inputs)
export default Inputs
