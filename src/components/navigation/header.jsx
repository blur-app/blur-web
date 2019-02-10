import React from 'react';
import { HeaderContainer, IconGroup, SearchBar, HeaderIcon, BlurTitle } from './styledComponents';

const Header = () => {
    return (
        <HeaderContainer>
            <IconGroup>
                <BlurTitle>Blur</BlurTitle>
                <HeaderIcon src="data:image/png;base64,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"/>
            </IconGroup>
            
            <SearchBar />

            <IconGroup>
                <HeaderIcon src="http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png" />
                <HeaderIcon src="https://imageog.flaticon.com/icons/png/512/63/63272.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/>
                <HeaderIcon src="https://static.thenounproject.com/png/538846-200.png"/>
            </IconGroup>
        </HeaderContainer>
    );
}

export default Header;