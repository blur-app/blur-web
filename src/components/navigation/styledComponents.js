import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.dark}
`;

export const HeaderIcon = styled.img`
    height: 40px;
    width: auto
    margin: 0 10px;
    cursor: pointer;
`;

export const SearchIcon = styled.img`
    height: 20px;
    width: auto;
    padding-left: 30px
    padding-right: 10px
`;

export const SearchGroup = styled.div`
    display: flex
    align-items: right
    width:90%
`;

export const SearchBar = styled.input`
    background-color:${Colors.dark}
    border-color:${Colors.dark}
    width:100%
    outline:none;
`;

export const IconGroup = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px
`;

export const BlurTitle = styled.h1`
    font-size: 32px;
    font-family: "Open Sans";
    color: ${Colors.primaryStrong}
`;
