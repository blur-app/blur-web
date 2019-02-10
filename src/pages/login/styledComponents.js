import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const FullPage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 80px);
    background-color: ${Colors.dark}
`;

export const BigLogo = styled.img`
    height: 150px;
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
    width: 60%;
    margin: 15px;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid ${Colors.primaryStrong};
    padding: 10px 15px;
`;

export const InputLabel = styled.span`
    margin-right: 40px;
    color: white;
    font-weight: 500;
`;

export const Submit = styled.span`
    border-radius: 5px;
    padding: 20px 15px;
    margin: 10px;
    border: 2px solid ${Colors.primaryStrong}
    color: ${Colors.primaryStrong}
    background-color: transparent
`;