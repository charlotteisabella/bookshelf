import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteBook, editBook } from '../redux/actions/books'
import styles from "./table.css";
import CSSModules from "react-css-modules";
import DeleteButton from "../components/delete_button"
import EditButton from "../components/edit_button"

class Table extends Component {
  renderBooks() {
    console.log(this.props.currentBook)
    return this.props.books.map((book) => {
      return (
        <tr>
          <td key={book.title}>{book.title}</td>
          <td key={book.rating}>{book.rating}</td>
          <td>
            <EditButton
            {...book}
            onClick={() => this.props.onEdit(book.id, book.title, book.rating)}/>
          </td>
          <td>
            <DeleteButton
            {...book}
            onClick={() => this.props.onDelete(book.id)}/>
          </td>
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
    books: state.books,
    currentBook: state.currentBook
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteBook(id))
    },
    onEdit: (id, title, rating) => {
      dispatch(editBook(id, title, rating))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
