import React from 'react';
import { HeaderContainer, IconGroup, SearchBar, HeaderIcon, BlurTitle, SearchIcon, SearchGroup} from './styledComponents';
import {NavLink, Link} from 'react-router-dom';

const active = {
    // backgroundColor: 'red'
};

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <IconGroup>
                <BlurTitle>Blur</BlurTitle>
              <NavLink
                to="/"
                activeStyle={active}
              >
                <HeaderIcon src="blur.svg" to="/"/>
              </NavLink>
            </IconGroup>
            </Link>

            <SearchGroup>
                <SearchIcon src="magnifying_glass.svg"/>
                <SearchBar />
            </SearchGroup>

            <IconGroup>
                <NavLink
                    to="/upload"
                    activeStyle={active}
                >
                    <HeaderIcon src="plus.png" />
                </NavLink>
                <NavLink
                    exact
                    to="/"
                    activeStyle={active}
                >
                    <HeaderIcon src="house.svg"/>
                </NavLink>
                <NavLink
                    to="/me"
                    activeStyle={active}
                >
                    <HeaderIcon src="user.png"/>
                </NavLink>
            </IconGroup>
        </HeaderContainer>
    );
}

export default Header;
