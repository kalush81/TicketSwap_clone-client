import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function LoginForm(props) {
  const id = useSelector(state => state.auth.userId);
  const isAuth = useSelector(state => state.auth.authenticated);
  console.log(isAuth);

  const { email, password } = props.values;
  const url  = `/user/${id}`

  function goToRoom() {
    return (
      <div>
        <h2>Hi. Loggin to your account using form below, and menage your profile</h2>
      </div>
    );
  }
  return (
    <div>
      {goToRoom()}  
      {!isAuth && <form onSubmit={props.onSubmit}>
        <label htmlFor="email">
          email
          <input name="email" onChange={props.onChange} value={email}></input>
        </label>
        <label htmlFor="password">
          password
          <input
            name="password" onChange={props.onChange} value={password}></input>
        </label>
        <input type="submit" />
      </form>}
      {isAuth && <button><Link to={url} >Go to your account</Link></button>}
    </div>
  );
}