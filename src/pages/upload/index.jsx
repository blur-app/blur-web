import React, {Component} from 'react';
import { CenteredContainer } from '../../components/basicStyledComponents';
import ServiceList from './serviceList';
import VerifyAccount from './verifyAccount';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            serviceName: null
        }
    }

    render() {
        const { index } = this.state;
        return (
            <CenteredContainer>
                {index === 0
                    ? <ServiceList setContent={(serviceName) => this.setState({serviceName, index: index + 1})}/>    
                    : null
                }
                {index === 1
                    ? < VerifyAccount goBack={() => this.setState({index: index - 1})}/>    
                    : null
                }
            </CenteredContainer>
        );
    }
}

export default Upload 
