export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'

export function addBook(title, rating) {
  return {
    type: ADD_BOOK,
    title,
    rating
  }
}

export function deleteBook() {
  return {
    type: DELETE_BOOK,
    id
  }
}

export function editBook(id, title, rating) {
  return {
    type: EDIT_BOOK,
    id,
    title,
    rating
  }
}
