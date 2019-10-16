import request from "superagent";
import { login2 } from './login_logout';
//import { userId } from "../reducers/userReducer";
const baseUrl = "http://localhost:4000";

function user(payload) {
  console.log("i ma user action, for logging");
  return {
    type: "SET_JWT",
    payload
  };
}
export const login = (email, password) => dispatch => {
  console.log("login action creator works");
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(res => {
      if (res.body.jwt) {
        const action = user({ jwt: res.body.jwt, userId: res.body.id });
        dispatch(action);
        dispatch(login2());
        return;
      } else {
        alert("hmmm, sign up");
      }
    })
    .catch(console.error);
};
//-------------------------------------------------------------------
const userId = payload => {
  return {
    type: "SET_USER_ID",
    payload
  };
};

export const signUp = (email, pass) => dispatch => {
  request
    .post(`${baseUrl}/signup`)
    .send({ email, pass })
    .then(res => {
      console.log(res.body.id);
      const action = userId(res.body.id);
      dispatch(action);
    })
    .catch(err => {
      console.log(err);
      alert("player is already registered");
    });
};
