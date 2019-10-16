import React, { Component } from 'react'
import { Input } from '@material-ui/core'
import { signUp } from '../actions/log&sign'
import { connect } from 'react-redux';

class SignUpFormContainer extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })   
    }
    handleSubmit = (e) => {
        const {email, password} = this.state
        e.preventDefault()
        this.props.signUp(email, password);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input onChange={this.handleChange} name='email' placeholder='email' value={this.state.email}/>
                <Input onChange={this.handleChange} name='password' placeholder='password' value={this.state.password}/>
                <input type='submit'/>
            </form>
        )
    }
}
export default connect(null, { signUp })(SignUpFormContainer)