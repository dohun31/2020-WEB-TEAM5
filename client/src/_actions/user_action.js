import axios from "axios";
<<<<<<< HEAD
import { LOGIN_USER, REGISTER_USER } from "./types";
=======
import { LOGIN_USER, REGISTER_USER ,EDIT_USER} from "./types";
>>>>>>> cf1b39c (moon)

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/user/login", dataToSubmit)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/user/register", dataToSubmit)
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
<<<<<<< HEAD
=======

}
export function editUser(dataToSubmit){
  const request = axios
    .post("/api/user/edit",dataToSubmit)
    .then((res)=>res.data);

    return{
      type:EDIT_USER,
      payload:request,
    };

>>>>>>> cf1b39c (moon)
}
