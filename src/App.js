import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import DbEventListContainer from "./components/DbEventListContainer";
import PrivateContainer from "./components/PrivateContainer";
import { login, logout } from "./actions/login_logout";
import SignUpFormContainer from "./components/signupFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import { grey } from "@material-ui/core/colors";

function App() {
  const isAuthenticated = useSelector(state => state.auth.jwt);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>TicketSwap.clone</h2>
      <nav style={{backgroundColor: "rgba(81, 71, 71, 0.2)", padding: '15px', marginBottom: '30px'}}>
        <Link to="/signup">
          <Button variant="contained" color="primary">
            signup
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="contained" color="primary" >
            Login
          </Button>
        </Link>
        <Link to="/">
          <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Link>
      </nav>
      <Route exact path="/" component={DbEventListContainer} />
      {isAuthenticated && <Route path="/user" component={PrivateContainer} />}
      <Route path="/signup" component={SignUpFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  );
}

export default App;
