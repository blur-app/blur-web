import React, {Component} from 'react';
import { CenteredContainer } from '../../components/basicStyledComponents';
import { LongBar, ServiceIcon, ServiceTitle } from './styledComponents';

import Services from '../../constants/Services';

class AccountsManagment extends Component {
    constructor(props) {
        super(props)
        console.warn(props)
    }

    componentDidMount() {
        const {hash, search} = this.props.location;
        if(search === "?state=imgur") {
            const pairs = hash.substring(1).split("&");
            const result = {};
            pairs.forEach(function(pair) {
                pair = pair.split('=');
                result[pair[0]] = decodeURIComponent(pair[1] || '');
            });
        }
    }

    renderAccounts() {
        console.warn('hi')
        return Object.values(Services).map((item, index) => {
                return (
                <LongBar 
                key={index}
                onClick={item.click} 
                color1={item.color1} 
                color2={item.color2}>
                    <ServiceIcon src={item.imageUrl}/>
                    <ServiceTitle>{item.name}</ServiceTitle>
                </LongBar>);
            }
        );
    }

    render() {
        console.warn('yo')
        return (
            <CenteredContainer>
                {this.renderAccounts()}
                <LongBar color1="lightgrey" color2="silver" />
            </CenteredContainer>
        );
    }
}

export default AccountsManagment;