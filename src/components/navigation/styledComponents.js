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

export const SearchBar = styled.input`
    background-color:${Colors.dark}
    border-color:${Colors.dark}
    width:50%
    borderColor: ${Colors.dark}
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