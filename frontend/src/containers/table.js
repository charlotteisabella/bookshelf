import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteBook } from '../redux/actions/books'
import styles from "./table.css";
import CSSModules from "react-css-modules";
import DeleteButton from "../components/delete_button"

class Table extends Component {
  renderBooks() {
    return this.props.books.map((book) => {
      return (
        <tr>
          <td key={book.title}>{book.title}</td>
          <td key={book.rating}>{book.rating}</td>
          <td><button>Edit</button></td>
          <td><DeleteButton key={book.id}
              {...book}
              onClick={() => onDelete(book.id)}/></td>
        </tr>
      )
    })
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderBooks()
          }
        </tbody>
      </table>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteBook(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table)
