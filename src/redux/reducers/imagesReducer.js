import * as actionTypes from '../constants/imagesConstants';

export const imagesReducer = (state = { images: [], loading: false }, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_IMAGES_REQUEST:
        case actionTypes.GET_IMAGES_FAIL:
            return {
                loading: true,
                error: payload,
                ...state,
            };

        case actionTypes.GET_IMAGES_SUCCESS:
            const categoryId = localStorage.getItem('category') || '';
            return {
                ...state,
                images: categoryId == '' ? payload : [...state.images, ...payload],
                loading: false
            };
        default:
            return state;
    }
};