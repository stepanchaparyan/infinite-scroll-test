
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Title, Wrapper, CategoriesList, ButtonContainer, AllButton } from './CategoriesStyled';
import Category from '../Categories/Category/Category';
import Loading from '../components/Loading/Loading';

const Categories = ({ categories, loading, getImages, resetImages }) => {
    const dispatch = useDispatch();

    const handleResetCategoryId = () => {
        localStorage.setItem('category', '');
        dispatch(resetImages());
        dispatch(getImages(1));
    };

    return (
    <Container>
        {loading ? (
            <Loading type="ThreeDots" color="black" height={20} width={60}></Loading>
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