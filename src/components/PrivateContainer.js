import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/addEvent";
import request  from "superagent";
import Input from '@material-ui/core/Input';


class PrivateContainer extends React.Component {
  state = {
    eventName: "",
    url: "",
    description: "",
    price: null,
    userId: this.props.userId
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    const {eventName:e, description:d, price:p} = this.state;
    const arr = [e,d,p];
    const anyEmpty = arr.some(el => el === '');
    if (!anyEmpty) {
      request
        .post('http://localhost:4000/userevents')
        .send(this.state)
        .then(response => this.props.addEvent(response.body));
    } else {
        alert('fill all the entries')
    }
    this.setState({
      eventName: "",
      url: "",
      description: "",
      price: 0
    });
    
  };
  render() {
    return (
      <div>
        <h3>You are logged in!</h3>
        <p>Here you can upload or edit your tickets</p>

        <Input
          onChange={this.handleChange}
          value={this.state.eventName}
          name="eventName"
          placeholder="name of event"
        />
        <textarea
          onChange={this.handleChange}
          value={this.state.description}
          name="description"
          placeholder="add description to your ticket"
        />
        <Input
          onChange={this.handleChange}
          name="price"
          type="number"
          value={this.state.price}
        />
        <button onClick={e => this.handleSubmit()} />
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addEvent: eventObject => dispatch(addEvent(eventObject))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateContainer);
