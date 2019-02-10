import React, {Component} from 'react';
import { BigLogo, BigTitle, Input, InputWrapper, InputLabel, FullPage, Submit } from './styledComponents';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password_hash: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const {username, password_hash} = this.state;
        this.props.mutationFunction({ variables: {username, password_hash} });
    }

    handleChange(event) {
        const {target: {id, value}} = event;
        this.setState({[id]: value})
    }

    render() {
        return (
            <FullPage>
                <BigLogo />
                <BigTitle>Sign in!</BigTitle>
                
                <InputWrapper>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={this.handleChange} id="username"/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Password</InputLabel>
                    <Input onChange={this.handleChange} id="password_hash"/>
                </InputWrapper>
                <Submit onClick={this.handleSubmit}>Submit</Submit>
                <Submit onClick={this.props.swapScreen}>Need an account?</Submit>
            </FullPage>
        );
    }
}

export default Signin;