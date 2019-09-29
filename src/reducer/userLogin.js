// import { GET_USER_DATA, LOGIN, LOGOUT } from '../actions/lists'

// const initialState = {
//     userName: '',
//     email: '',
//     id: '',
//     phoneNumber: ''
// }

// export default function userLogin(state = initialState, action) {
//   switch(action.type) {
//     case GET_USER_DATA:
//       return getUserData(state, action);
//     case LOGIN:
//       return login(state, action);
//     case LOGOUT:
//       return logout(state, action);
//     default:
//       return state;
//   }
// }

// function getUserData(state, action) {
//   return {
//     ...state,
//     lists: action.payload
//   }
// }

// function login(state, action) {
//   return {
//     ...state,
//     lists: [
//       ...state.lists,
//       action.payload
//     ]
//   }
// }

// function logout(state, action) {
//   const id = action.payload.id
//   let editedData = state
//   return {
//     ...state,
//     lists: [
//       ...state.lists,
//       action.payload
//     ]
//   }
// }
