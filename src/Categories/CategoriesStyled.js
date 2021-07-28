import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: gray;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    padding: 0 24px;
    height: 100px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 16px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoriesList = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 8px 0 6px;
    }
`;

export const AllButton = styled.button`
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

export const ButtonContainer = styled.div`
    display: flex;
`;
