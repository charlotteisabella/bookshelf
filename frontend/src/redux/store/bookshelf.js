import { createStore } from 'redux'
import bookShelf from '../reducers/books.js'
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK, addBook } from '../actions/books'

let store = createStore(bookShelf, window.STATE_FROM_SERVER)
