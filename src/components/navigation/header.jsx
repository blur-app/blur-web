import React from 'react';
import { HeaderContainer, IconGroup, SearchBar, HeaderIcon, BlurTitle, SearchIcon, SearchGroup} from './styledComponents';

const Header = () => {
    return (
        <HeaderContainer>
            <IconGroup>
                <BlurTitle>Blur</BlurTitle>
                <HeaderIcon src="https://image.flaticon.com/icons/svg/133/133755.svg"/>
            </IconGroup>



            <SearchGroup>
                <SearchIcon src="https://image.flaticon.com/icons/svg/34/34202.svg"/>
                <SearchBar />
            </SearchGroup>

            <IconGroup>
                <HeaderIcon src="http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png" />
                <HeaderIcon src="https://image.flaticon.com/icons/svg/63/63272.svg"/>
                <HeaderIcon src="https://static.thenounproject.com/png/538846-200.png"/>
            </IconGroup>
        </HeaderContainer>
    );
}

export default Header;