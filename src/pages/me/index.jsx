import React, {Component} from 'react';
import Post from '../../components/post';
import {
    CenteredContainer,
    IconButton
} from '../../components/basicStyledComponents';

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
        console.warn(this.props.location);
        return (
            <CenteredContainer>
                <IconButton 
                    src="https://cdn0.iconfinder.com/data/icons/cosmo-education/40/326441-pupils-512.png"
                    onClick={() => this.props.history.push('/me/accounts')}
                />
                {this.renderPosts()}
            </CenteredContainer>
        );
    }
}

export default Me;