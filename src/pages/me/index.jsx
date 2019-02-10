import React, {Component} from 'react';
import Post from '../../components/post';
import {
    CenteredContainer,
    IconButton,
    TextContainer,
    NameContainer
} from '../../components/basicStyledComponents';
import AccountsManagment from './accountsManagment';
import { Query } from 'react-apollo';

import {getUser} from '../../graphql';
import { UsernameText, Biography } from './styledComponents';

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    User: {
                        username: 'multio',
                        picture: ''
                    },
                    Post: {
                        host: 'twitter',
                        source: 'url'
                    }
                },
                {
                    User: {
                        username: 'multio',
                        picture: ''
                    },
                    Post: {
                        host: 'twitter',
                        source: 'url'
                    }
                }
            ]
        };
    }


    renderPosts() {
        return this.state.posts.map((item, index) => 
        <Post
            key={index}
            {...item} 
        />);
    }

    render() {
        if(this.props.location.pathname === "/me/accounts") return <AccountsManagment {...this.props}/>
        console.warn(this.props.location);
        const user_id = localStorage.getItem('user_id');
        console.warn('user', user_id)

        return (
            <Query query={getUser} variables={{user_id: parseInt(user_id)}}>
            {({loading, error, data}) => {
                console.warn(data)
                if (!data && !data.getUser) return <div>sad</div>
                return <span>

                    <TextContainer>
                        Your Accounts
                    </TextContainer>
                    <div style={{marginLeft : 30}}>
                    {data.getUser ? <div>
                        <NameContainer>
                            Username: &nbsp;
                            <UsernameText>{data.getUser.username}</UsernameText>
                        </NameContainer>
                            <br></br>
                        <NameContainer>
                            Name: &nbsp;
                            <UsernameText>{data.getUser.first_name}</UsernameText>
                        </NameContainer>
                        &nbsp;
                        <NameContainer>
                            <UsernameText>{data.getUser.last_name}</UsernameText>
                        </NameContainer>
                        </div>
                        : null
                    }
                    <CenteredContainer>
                        <IconButton
                            src="https://visualpharm.com/assets/998/New%20Window-595b40b65ba036ed117d208a.svg"
                            onClick={() => this.props.history.push('/me/accounts')}
                        />
                        Link another account
                    </CenteredContainer>
                    </div>
                    {this.renderPosts()}
                </span>
            }}
            </Query>
        );
    }
}

export default Me;