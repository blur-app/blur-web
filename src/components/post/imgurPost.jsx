import React, {Component} from 'react';
import axios from 'axios';

import {ImgureImage, ImgureTitle, RowGroup} from './styledComponents';
import { IconButton } from '../basicStyledComponents';

class ImgurPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    componentDidMount() {
        const {source} = this.props;
        axios.get(`https://api.imgur.com/3/gallery/album/${source}`, {headers: {Authorization: 'Client-ID b5a3df24e04e99b'}})
            .then(({data}) => {this.setState({data: data.data, ready:true})});
    }

    render() {
        console.warn(this.state)
        if(!this.state.ready) return null;
        const {title, images} = this.state.data
        return (
            <div style={{height: '100%', width: '100%'}}>
                <ImgureImage src={images[0].link}/>
                <RowGroup>
                    <ImgureTitle>{title}</ImgureTitle>
                    <IconButton src="thumb.png"/>
                </RowGroup>
            </div>
        );
    }
}

export default ImgurPost;