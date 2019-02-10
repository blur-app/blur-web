import styled from 'styled-components';

export const LongBar = styled.div`
    border-radius: 15px;
    width: 100%;
    font-family: Open Sans;
    margin: 20px 60px;
    max-width: 678px;
    background: ${props => `linear-gradient(to bottom, ${props.color1}, ${props.color2})`};
    height: 80px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    

    display: flex;
    justify-content: space-between
    align-items: center;
`;

export const ServiceIcon = styled.img`
    height: 40px;
    width: auto;
    margin: 0 15px;
`;

export const ServiceTitle = styled.div`
    font-size: 22px;
    color: white;
    margin: 0 20px;
`;

export const UsernameText = styled.h1`

`;

export const Biography = styled.p`
    
`;