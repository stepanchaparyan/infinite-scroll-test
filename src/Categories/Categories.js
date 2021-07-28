
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Title, Wrapper, CategoriesList, ButtonContainer, AllButton } from './CategoriesStyled';
import Category from '../Categories/Category/Category';

const Categories = ({ categories, loading, getImages }) => {
    const dispatch = useDispatch();

    const handleResetCategoryId = () => {
        localStorage.setItem('category', '');
        dispatch(getImages(1));
    };

    return (
    <Container>
        {loading ? (
            <div>loading ...</div>
        ) : (
            <Wrapper>
                <Title>Select Categories</Title>
                <ButtonContainer>
                    <AllButton onClick={handleResetCategoryId}>All</AllButton>
                    <CategoriesList>
                        {categories?.map(item => (
                            <Category key={item.id} category={item.name} id={item.id}></Category>
                        ))}
                    </CategoriesList>
                </ButtonContainer>
            </Wrapper>
        )}
    </Container>
)};

Categories.propTypes = {
    categories: PropTypes.array,
    loading: PropTypes.bool,
    getImages: PropTypes.func,
};

Categories.defaultProps = {
    categories: [],
    loading: false,
    getImages: () => {},
};

export default Categories;