import React, {Component} from 'react';
import { Card, IconButton } from '../basicStyledComponents';
import {PostWrapper, AuthorWrapper, AuthorName} from './styledComponents';
import ImgurPost from './imgurPost';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderPostContent() {
        switch(this.props.host) {
            case 'Imgur':
                return <ImgurPost {...this.props} />
            default:
                return <div>Error</div>

        }
    }

    render() {
        return (
            <PostWrapper>
                <AuthorWrapper>
                    <IconButton src="panda.svg"/>
                    <AuthorName>{this.props.user_id}</AuthorName>
                </AuthorWrapper>
                <Card>
                   {this.renderPostContent()}
                </Card>
            </PostWrapper>
        );
    }
}

export default Post;