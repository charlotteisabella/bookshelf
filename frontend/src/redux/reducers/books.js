import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/books'

const initialState = {
  books: []
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
          books: [
            ...state.books,
            {
              id: action.id,
              title: action.title,
              rating: action.rating
            }
          ]
        })
        case DELETE_BOOK:
          return Object.assign({}, state, {
            books: [
              ...state.books,
              {
                id: action.id
              }
            ]
          })
    default:
      return state
  }
}

export default bookShelf
