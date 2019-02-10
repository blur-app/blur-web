import React, {Component} from 'react';
import Post from '../../components/post';
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
            <CenteredContainer>
                {this.renderPosts()}
            </CenteredContainer>
        );
    }
}

export default Profile;