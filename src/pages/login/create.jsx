import React, {Component} from 'react';
import { BigLogo, BigTitle, Input, InputWrapper, InputLabel, FullPage, Submit } from './styledComponents';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password_hash: null,
            first_name: null,
            last_name: null,
            email: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {username, password_hash, email, first_name, last_name} = this.state;
        this.props.mutationFunction({ variables: {username, password_hash, first_name, last_name, email} });
    }

    handleChange(event) {
        const {target: {id, value}} = event;
        this.setState({[id]: value})
    }

    render() {
        return (
            <FullPage>
                <BigLogo />
                <BigTitle>Create an account</BigTitle>
                <InputWrapper>
                    <InputLabel>First name</InputLabel>
                    <Input onChange={this.handleChange} id="first_name"/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Last name</InputLabel>
                    <Input onChange={this.handleChange} id="last_name"/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={this.handleChange} id="username"/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Password</InputLabel>
                    <Input type="password" onChange={this.handleChange} id="password_hash"/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={this.handleChange} id="email"/>
                </InputWrapper>
                <Submit onClick={this.handleSubmit}>Create</Submit>
                <Submit onClick={this.props.swapScreen}>Already have an account?</Submit>
            </FullPage>
        );
    }
}

export default Signin;