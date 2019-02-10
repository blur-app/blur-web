import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from 'react-apollo';


import Post from '../../components/post';
import {getUsers} from '../../graphql';
import {
    CenteredContainer
} from '../../components/basicStyledComponents';

class Profile extends Component {
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
        return (
            <Query query={getUsers}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                        console.warn(data)
                    return (
                        <CenteredContainer>
                            {this.renderPosts()}
                        </CenteredContainer>
                    );}
                }                
            </Query>
        );
    }
}

export default Profile;