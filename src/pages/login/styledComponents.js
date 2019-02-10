import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const FullPage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const BigLogo = styled.img`
    height: 50px;
    width: auto;
`;

export const BigTitle = styled.h1`
    font-size: 48px;
    font-family: "Open Sans";
    color: ${Colors.primaryStrong}
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    max-width:400px
    margin: 15px;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid ${Colors.secondaryWeak};
    padding: 10px 15px;
`;

export const InputLabel = styled.span`
    margin-right: 40px;
    color: black;
    font-family: "Open Sans";
    font-size: 20px
    font-weight: 'bold';
`;

export const Submit = styled.span`
    border-radius: 5px;
    padding: 20px 15px;
    margin: 10px;
    width: 40%
    max-width:400px
    text-align:center
    cursor: pointer

    color: ${Colors.secondaryWeak}
    background-color: ${Colors.dark}
    font-family: "Open Sans";

`;