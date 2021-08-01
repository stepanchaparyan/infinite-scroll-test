import * as actionTypes from '../constants/imagesConstants';
import axios from 'axios';
import { images } from '../../constants/url';

export const getImages = (page = 1, categoryID = '', limit = 10) => async dispatch => {
  const id = `&category_ids=${categoryID}`;
  const pageNumber = `&page=${page}`;
  const pageLimit = `&limit=${limit}`;
  try {
    dispatch({ type: actionTypes.GET_IMAGES_REQUEST });

    const { data } = await axios.get(`${images}/search?${pageNumber}${id}${pageLimit}`);

    dispatch({
      type: actionTypes.GET_IMAGES_SUCCESS,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: actionTypes.GET_IMAGES_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const resetImages = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.RESET_IMAGES_REQUEST });
    dispatch({ type: actionTypes.RESET_IMAGES_SUCCESS });
  } catch (error) {
    dispatch({
      type: actionTypes.RESET_IMAGES_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};


