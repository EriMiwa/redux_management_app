import { GET_LISTS, CLICK_LIST, ADD_LIST } from '../actions/lists'

const initialState = {
  lists: [
    {id: '1', title: 'Squirtle Laid an Egg', state: 'open', url: 'https://api.github.com/', createdDate: '2019-09-19T18:06:03Z', updatedDate:'2019-09-19T18:06:03Z'},
    {id: '2', title: 'Squirtle Laid an Egg', state: 'open', url: 'https://api.github.com/', createdDate: '2019-09-19T18:06:03Z', updatedDate:'2019-09-19T18:06:03Z'},
    {id: '3', title: 'Squirtle Laid an Egg', state: 'open', url: 'https://api.github.com/', createdDate: '2019-09-19T18:06:03Z', updatedDate:'2019-09-19T18:06:03Z'}
  ]
}

export default function lists(state = initialState, action) {
  switch(action.type) {
    case GET_LISTS:
      return getLists(state, action);
    case ADD_LIST:
      return addLists(state, action);
    case CLICK_LIST:
      return clickList(state, action);
    default:
      return state;
  }
}

function getLists(state, action) {
  return {
    ...state,
  }
}

function addLists(state, action) {
  return {
    ...state,
    lists: [
      ...state.lists,
      {
        text: action.payload,
        isCompleted: false,
      }
    ]
  }
}

function clickList(state, action) {
  const id = action.payload;
  let currentLists = state.lists;

  currentLists[id] = {
    ...currentLists[id],
    isCompleted: !currentLists[id].isCompleted
  }

  return {
    ...state,
    lists: currentLists,
  }
}