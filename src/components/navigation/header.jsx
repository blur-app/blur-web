import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { HeaderContainer, IconGroup, SearchBar, HeaderIcon, BlurTitle } from './styledComponents';

const active = {
    backgroundColor: 'red'
}

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <IconGroup>
                    <BlurTitle>Blur</BlurTitle>
                    <HeaderIcon src="https://image.flaticon.com/icons/svg/133/133755.svg"/>
                </IconGroup>
            </Link>
            
            <SearchBar />

            <IconGroup>
                <NavLink 
                    to="/upload"
                    activeStyle={active}
                >
                    <HeaderIcon src="http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png" />
                </NavLink>
                <NavLink 
                    exact
                    to="/"
                    activeStyle={active}
                >
                    <HeaderIcon src="https://image.flaticon.com/icons/svg/63/63272.svg"/>
                </NavLink>
                <NavLink 
                    to="/me"
                    activeStyle={active}
                >
                    <HeaderIcon src="https://static.thenounproject.com/png/538846-200.png"/>
                </NavLink>
            </IconGroup>
        </HeaderContainer>
    );
}

export default Header;