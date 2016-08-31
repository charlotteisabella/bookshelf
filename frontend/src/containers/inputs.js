import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/books'

class Inputs extends Component {
  render() {
    const { fields: {id, title, rating}, handleSubmit } = this.props;
    return (

      <form onSubmit={ handleSubmit((data, dispatch) => {dispatch(addBook())}) }>

        <label htmlFor="title">Title</label>
        <input type="text" {...title} />

        <label>Rating</label>
        <select {...rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    );
    // let input
    // let select
    // return (
      // <div>
      //   <form onSubmit={
      //     e => {
      //       e.preventDefault()
      //       if (!input.value.trim()) {
      //         return
      //       }
      //       this.props.onAdd(input.value, select.value)
      //       input.value = this.props.currentBook || ''
      //       select.value = 1
      //     }
      //   }>
      //
      //     <input ref={node => {input = node}} />
      //
      //     <select ref={node => {select = node}} >
      //       <option value="1">1</option>
      //       <option value="2">2</option>
      //       <option value="3">3</option>
      //       <option value="4">4</option>
      //       <option value="5">5</option>
      //     </select>
      //
      //     <button type="submit">
      //       Add
      //     </button>
      //   </form>
      // </div>
    // )
  }
}

const onAdd = (dispatch) => {
  return {
    onAdd: (title, rating) => {
      dispatch(addBook(title, rating))
    }
  }
}

export default reduxForm({
  form: 'inputs',
  fields: ['id', 'title', 'rating']
}, null, { addBook })(Inputs);

// const mapStateToProps = (state) => {
//   return {
//     currentBook: state.currentBook[0]
//   };
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (title, rating) => {
//       dispatch(addBook(title, rating))
//     }
//   }
// }
//
// Inputs = connect(mapStateToProps, mapDispatchToProps)(Inputs)
// export default Inputs
