import React, {Component} from 'react';
import { CenteredContainer } from '../../components/basicStyledComponents';
import { LongBar, ServiceIcon, ServiceTitle } from './styledComponents';
import { Mutation} from 'react-apollo';

import { createOauthCreds } from '../../graphql';
import Services from '../../constants/Services';

class AccountsManagment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newToken: false,
            tokenInfo: {
                access_token: null,
                refresh_token: null
            }
        }
        console.warn(props)
    }

    componentDidMount() {
        const {hash, search} = this.props.location;
        if(search.indexOf("?state=") >= 0 || search.indexOf("&state=") >= 0) {
            const pairs = hash.substring(1).split("&").concat(search.substring(1).split("&"));
            const result = {};
            pairs.forEach(function(pair) {
                pair = pair.split('=');
                result[pair[0]] = decodeURIComponent(pair[1] || '');
            });
            this.setState({tokenInfo: result, newToken: true})
        } else {
            this.setState({newToken: false})
        }
    }

    renderAccounts() {
        console.warn('hi')
        return Object.values(Services).map((item, index) => {
                return (
                <LongBar 
                    key={index}
                    onClick={item.click} 
                    color1={item.color1} 
                    color2={item.color2}
                >
                    <ServiceIcon src={item.imageUrl}/>
                    <ServiceTitle>{item.name}</ServiceTitle>
                </LongBar>);
            }
        );
    }

    render() {
        console.warn('yoo', this.state)
        console.warn(this.props)
        const {newToken} = this.state;
        const {access_token, refresh_token, state} = this.state.tokenInfo;
        return (
            <Mutation mutation={createOauthCreds} variables={{user_id: 9, access_token, refresh_token, service: state}}>
                {(mutationFunction, { data }) => {
                    if (newToken === true) {
                        console.error('In the statement')
                        mutationFunction();
                        this.setState({newToken: false})
                    }
                    return (
                        <CenteredContainer>
                            {this.renderAccounts()}
                            <LongBar color1="lightgrey" color2="silver" />
                        </CenteredContainer>
                    );
                }}
            </Mutation>
        );
    }
}


export default AccountsManagment;