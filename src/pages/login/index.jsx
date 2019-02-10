import React, {Component} from 'react';
import { Mutation } from 'react-apollo';

import Signin from './signin';
import Create from './create';
import { createUser, authUser } from '../../graphql';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasAccount: true
        };
        this.swapScreen = this.swapScreen.bind(this);
    }    


    checkData(data) {
        console.warn('data', data);
    }

    swapScreen() {
        this.setState({hasAccount: !this.state.hasAccount});
    }


    render() {
        const {hasAccount} = this.state;

        return (
            <div>
                {hasAccount
                    ? <Mutation mutation={createUser}>
                        {(mutationFunction, {data}) => {
                            this.checkData(data)
                            return <Create swapScreen={this.swapScreen} mutationFunction={mutationFunction} />
                        }}
                    </Mutation>
                    : <Mutation mutation={authUser}>
                        {(mutationFunction, {data}) => {
                                this.checkData(data)
                                return <Signin swapScreen={this.swapScreen} mutationFunction={mutationFunction} />
                            }
                        }
                    </Mutation>
                }

            </div>
            
        )
    }
}

export default Login;