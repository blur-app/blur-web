import styled from 'styled-components';
import Colors from '../constants/Colors';


export const CenteredContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-family: 'Open Sans';
        color: ${Colors.dark};

`;

export const TextContainer = styled.h1`
    align-items: left;
    color: ${Colors.dark};
    font-family: 'Open Sans';
    margin-left: 30px
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    width: 100%;
    width: 678px;
    background-color: #FFFFFF

    margin: 20px 15px;
    padding: 40px 20px; 

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const IconButton = styled.img`
    height: 60px;
    width: auto;
`;
