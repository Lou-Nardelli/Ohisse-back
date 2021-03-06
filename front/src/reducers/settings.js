// == import

import {
  HANDLE_DARK,
  HANDLE_MENU,
  CHANGE_LOGIN_FIELD,
  IS_LOGGED,
  LOGOUT } from "../actions/settings";

// npm

// local

export const initialState = {
  burgerMenu: false,
  darkMode: false,
  isLogged:false,
  currentUser:[],
  login :
    {
    email:'',
    password:'',
  },
};

const settingsReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MENU :
      return {
        ...state,
        burgerMenu: !state.burgerMenu,
      };
      case HANDLE_DARK :
        return {
          ...state,
          darkMode: !state.darkMode,
        };
      case CHANGE_LOGIN_FIELD :
        return {
          ...state,
          login: {
            ...state.login,
            [action.name] : action.value
          }          
        }
      case IS_LOGGED: 
        return {
          ...state,
          isLogged:!state.isLogged,
          login :{
            ...state.login,
            password:'',
          }
        }
      case LOGOUT:
        return {
          ...state,
          isLogged: false,
          currentUser:[],          
        }
    default:
      // console.log(state);
      return state;
  }
};

export default settingsReducers