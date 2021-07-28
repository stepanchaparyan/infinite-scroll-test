import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;   
    margin: 8px;
    padding: 8px;
    @media (max-width: 768px) {
        margin: 2px;
        padding: 0;
    }
`;

export const ButtonStyled = styled.button`
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    background: unset;
    text-transform: uppercase;
    font-weight: 600;
    outline: none;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
