import React from 'react';
import { LongBar, ServiceIcon, ServiceTitle } from '../me/styledComponents';

import Services from '../../constants/Services';
import { CenteredContainer } from '../../components/basicStyledComponents';

const ServiceList = ({setContent}) => {

    const longBars = Object.values(Services).map((item, index) => {
            return (
            <LongBar 
            key={index}
            onClick={() => setContent(item.name)} 
            color1={item.color1} 
            color2={item.color2}>
                <ServiceIcon src={item.imageUrl}/>
                <ServiceTitle>{item.name}</ServiceTitle>
            </LongBar>);
        }
    );
    return (
        <CenteredContainer>
            {longBars}
        </CenteredContainer>
    );
}


export default ServiceList;