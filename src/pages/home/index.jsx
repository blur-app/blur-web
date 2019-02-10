import React, {Component} from 'react';
import { CenteredContainer } from '../../components/basicStyledComponents';
import Post from '../../components/post';
import { Query } from 'react-apollo';
import {getAllPosts} from '../../graphql';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    renderPosts(data) {
        console.warn('DATAAAAA', data)
        if (!data) return null;
        return data.map((item, index) => 
        <Post
            key={index}
            {...item} 
        />);
    }


    render() {
        return (
            <Query query={getAllPosts}>
                {({data, loading, error}) => {

                    if(!data && !data.getAllPosts) return <p>sad</p> 
                    console.warn(data)
                    return (
                        <CenteredContainer>
                            {this.renderPosts(data.getAllPosts)}
                        </CenteredContainer>
                    );
                }}
            </Query>
        );
    };
}

export default Home;