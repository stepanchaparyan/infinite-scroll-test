
import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './ImagesStyled';
import Image from './Image/Image';

const Images = ({ images, loading }) => {
    return (
        <Container>
            {loading ? (
                <div>loading ...</div>
            ) : (
                <>
                    {images?.map(item => (
                        <Image key={item.id} url={item?.url}></Image>
                    ))}
                </>
            )}
        </Container>
    )
};

Images.propTypes = {
    images: PropTypes.array,
    loading: PropTypes.bool,
};

Images.defaultProps = {
    images: [],
    loading: false,
};

export default Images;