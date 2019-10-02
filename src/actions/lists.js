export const GET_LISTS = 'GET_LISTS';
export const ADD_LIST = 'ADD_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export function getLists() {
  return function(dispatch) {
    dispatch({
      type: GET_LISTS,
      // payload: lists
    })
  }
}

export function addList(newPost) {
  return function(dispatch) {
    dispatch({
      type: ADD_LIST,
      payload: newPost,
    })
  }
}

export function editList(editedPost,id) {
  return function(dispatch) {
    dispatch({
      type: EDIT_LIST,
      payload: { editedPost, id }
    })
  }
}

export function deleteList(id) {
    return function(dispatch) {
      dispatch({
        type: DELETE_LIST,
        payload: id,
      })
    }
}