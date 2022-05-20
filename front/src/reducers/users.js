// == import

// npm

// local


import {
  CHANGE_FIELD,
  SAVE_CURRENT_TOKEN,
  SAVE_CURRENT_USER,
  CHANGE_INPUT,
  SAVE_USERS,
  FETCH_USER_BY_ID,
  EMPTY_FIELD_DELETE
} from "../actions/users";

import { LOGOUT } from '../actions/settings';


export const initialState = {

  currentUser: [],
  tokenCurrentUser: "",

  usersList: [],
  search:

  {
    inputValue: '',
  },
  inputCurrentUser: {
    id:'',
    firstname: '',
    lastname: '',
    pseudo: '',
    mail: '',
    description: '',
    role: '',
  },
};
console.log(initialState);
const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
      case SAVE_USERS:
          return {
            ...state,
            usersList: action.data,
          };
      case SAVE_CURRENT_USER:
        return {
          ...state,
          currentUser: action.data,
        }
      case SAVE_CURRENT_TOKEN:
        return {
          ...state,
          tokenCurrentUser: action.data,
        }
    case FETCH_USER_BY_ID:
        return {
          ...state,
          inputCurrentUser: {
            ...state.inputCurrentUser,
            id:action.data.id,
            firstname: action.data.firstname,
            lastname: action.data.lastname,
            pseudo: action.data.pseudo,
            mail: action.data.email,
            description: action.data.description,
            role: action.data.role,
          } 
        }
    case CHANGE_INPUT:
          return {
            ...state,
            inputCurrentUser: {
              ...state.inputCurrentUser,
              [action.name]: action.value
            }
          }
    case EMPTY_FIELD_DELETE:
      return {
        ...state,
        inputCurrentUser: {
          ...state.inputCurrentUser,
            id:'',
            firstname: '',
            lastname: '',
            pseudo: '',
            mail: '',
            description: '',
            role: '',
          }
      }
      case LOGOUT:
        return {
          ...state,
          tokenCurrentUser: "",        
        }
          default:
            return state;
  }
};

export default usersReducer;