import { GET_LISTS, EDIT_LIST, ADD_LIST, DELETE_LIST } from '../actions/lists'

const initialState = {
  lists: [
    {id: '11111', title: 'title1', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/32820', createdDate: '2019-09-19T18:06:03Z', updatedDate:'2019-09-19T18:06:03Z'},
    {id: '22222', title: 'title2', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/32820', createdDate: '2019-09-19T18:06:03Z', updatedDate:'2019-09-19T18:06:03Z'},
    {id: '33333', title: 'title3', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/32820', createdDate: '2019-09-19T18:06:03Z', updatedDate:'2019-09-19T18:06:03Z'}
  ]
}

export default function lists(state = initialState, action) {
  switch(action.type) {
    case GET_LISTS:
      return getLists(state, action);
    case ADD_LIST:
      return addLists(state, action);
    case EDIT_LIST:
      return editList(state, action);
    case DELETE_LIST:
      return deleteList(state, action);
    default:
      return state;
  }
}

function getLists(state, action) {
  return {
    ...state,
    lists: action.payload
  }
}

function addLists(state, action) {
  return {
    ...state,
    lists: [
      ...state.lists,
      action.payload
    ]
  }
}

function editList(state, action) {

}

function deleteList(state, action) {
  const id = action.payload;
  let currentLists = state.lists.filter(list => {
    return list.id !== id;
  });

  return {
    ...state,
    lists: currentLists,
  }
  
}
