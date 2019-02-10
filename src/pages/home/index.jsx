import React, {Component} from 'react';
import { CenteredContainer } from '../../components/basicStyledComponents';
import Post from '../../components/post';


class Home extends Component {
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
                        host: 'imgur',
                        source: 'qG2fBcG'
                    }
                },
                {
                    User: {
                        username: 'skyler',
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
            {...item} 
        />);
    }


    render() {
        return (
            <CenteredContainer>
                {this.renderPosts()}
            </CenteredContainer>
        );
    };
}

export default Home;