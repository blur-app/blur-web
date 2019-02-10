import React, {Component} from 'react';
import { Card } from '../basicStyledComponents';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <Card>
              {this.props.User.username}
          </Card>
        );
    }
}

export default Post;