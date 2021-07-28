
import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageStyled } from './ImageStyled';

const Image = ({ url }) => (
    <Container>
        <ImageStyled src={url} />
    </Container>
);

Image.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Image;