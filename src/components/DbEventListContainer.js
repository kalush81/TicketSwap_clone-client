import React, { Component } from "react";
import DbEventList from "./DbEventList";

import { connect } from "react-redux";
import { loadEventsFromDb } from "../actions/loadEventsFromDb";


class DbEventListContainer extends Component {
  componentDidMount() {
    this.props.loadEventsFromDb()
  }

 render() {
   
   return <DbEventList />;
 }

};

export default connect(null, { loadEventsFromDb })(DbEventListContainer)
