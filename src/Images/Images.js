
import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './ImagesStyled';
import Image from './Image/Image';
import Loading from '../components/Loading/Loading';

const Images = ({ images, loading }) => {
    return (
        <Container>
            {loading ? (
              <>
                <Loading type="Oval" color="blue" height={40} width={40}></Loading>
              </>
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