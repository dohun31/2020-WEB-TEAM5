/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_USER, REGISTER_USER, EDIT_USER } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case EDIT_USER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
