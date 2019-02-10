import React, {Component} from 'react';
import Post from '../../components/post';
import {
    CenteredContainer,
    IconButton,
    TextContainer
} from '../../components/basicStyledComponents';
import AccountsManagment from './accountsManagment';

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

        return (
            <span>
                <TextContainer>
                    Linked Accounts

                </TextContainer>
                <CenteredContainer>
                    <IconButton
                        src="https://visualpharm.com/assets/998/New%20Window-595b40b65ba036ed117d208a.svg"
                        onClick={() => this.props.history.push('/me/accounts')}
                    />
                    Link another account
                </CenteredContainer>
                {this.renderPosts()}
            </span>
        );
    }
}

export default Me;