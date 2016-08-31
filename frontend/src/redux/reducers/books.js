import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/books'

const initialState = {
  books: [],
  currentBook: {}
}

function bookShelf(state = initialState, action) {
  let id = 0;
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
        books: [
          ...state.books,
          {
            id: id++,
            title: action.title,
            rating: action.rating
          }
        ]
      })
      case EDIT_BOOK:
        return Object.assign({}, state, {
          currentBook: state.books.map((book, id) => {
            if (id === action.id) {
              return Object.assign({}, book, {
                id: action.id,
                title: action.title,
                rating: action.rating
              })
            }
            return book
          })
        })
      case DELETE_BOOK:
        return Object.assign({}, state, {
          books: [
            ...state.books.slice(0, action.id),
            ...state.books.slice(action.id + 1)
          ]
        })
    default:
      return state
  }
}

export default bookShelf
