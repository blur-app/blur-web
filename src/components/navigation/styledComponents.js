import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { Color } from 'vscode-languageserver';
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
    border: none;
    width:50%
    borderColor: ${Colors.dark}
    color: ${Colors.secondaryWeak}
    padding: 10px;
    border-bottom: 1px solid ${Color.secondaryWeak}
    outline: none
    :focus {
        border-bottom: 2px solid ${Color.secondaryStrong}
    }
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