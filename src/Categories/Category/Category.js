
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, ButtonStyled } from './CategoryStyled';
import { getImages } from '../../redux/actions/imagesActions';

const Category = ({ category, id }) => {
    const dispatch = useDispatch();
    const getNewImages = () => {
        localStorage.setItem('category', id);
        dispatch(getImages(1, id));
    };

    return (
        <Container>
            <ButtonStyled onClick={getNewImages}>{category}</ButtonStyled>
        </Container>
    )
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Category;