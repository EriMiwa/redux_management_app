export const GET_LISTS = 'GET_LISTS';
export const ADD_LIST = 'ADD_LIST';
export const CLICK_LIST = 'CLICK_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export function getLists(payload) {
  return function(dispatch) {
    dispatch({
      type: GET_LISTS,
      payload: { payload }
    })
  }
}

//payload = a newly added todo
export function addList(text) {
  return function(dispatch) {
    dispatch({
      type: ADD_LIST,
      payload: text,
    })
  }
}

//payload = id = number
export function clickList(id) {
  return function(dispatch) {
    dispatch({
      type: CLICK_LIST,
      payload: id,
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