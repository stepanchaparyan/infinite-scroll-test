
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoriesActions';
import { getImages, resetImages } from '../redux/actions/imagesActions';

import Categories from '../Categories/Categories';
import Images from '../Images/Images';
import { ButtonStyled } from './HomeStyled';

const Home = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categories);
    const image = useSelector(state => state.images);
    const { categories, loading: categoriesLoading } = category;
    const { images, loading: imagesLoading} = image;
    
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    let categoryId = '';

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    useEffect(() => {
        if (fetching) {
            categoryId = localStorage.getItem('category') || '';
            dispatch(getImages(currentPage, categoryId));
            setCurrentPage(prev => prev + 1);
            setFetching(false);
        }
    }, [dispatch, fetching, images.length]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true);
        };
    };

    const getNewImages = () => {
        setFetching(true);
    };

    return (
      <>
        <Categories categories={categories} loading={categoriesLoading} getImages={getImages} resetImages={resetImages} />
        <Images images={images} loading={imagesLoading} ></Images>
        <ButtonStyled onClick={getNewImages}>Load more</ButtonStyled>
      </>
    );
};

export default Home;