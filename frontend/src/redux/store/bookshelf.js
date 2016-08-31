import { createStore, combineReducers } from 'redux'
import bookShelf from '../reducers/books.js'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  books: bookShelf,
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
