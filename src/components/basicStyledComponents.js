import styled from 'styled-components';

export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    border-radius: 10px;
    width: 100%;
    max-width: 678px;

    margin: 60px 30px;
    padding: 40px 20px; 

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const IconButton = styled.img`
    height: 40px;
    width: auto;
`;