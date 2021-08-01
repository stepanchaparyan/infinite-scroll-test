import * as actionTypes from '../constants/imagesConstants';

export const imagesReducer = (state = { images: [], loading: false }, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_IMAGES_REQUEST:
        case actionTypes.RESET_IMAGES_REQUEST:
        case actionTypes.RESET_IMAGES_FAIL:
        case actionTypes.GET_IMAGES_FAIL:
            return {
                ...state,
                loading: true,
                error: payload,
            };
        case actionTypes.GET_IMAGES_SUCCESS:
            const categoryId = localStorage.getItem('category') || '';
            return {
                ...state,
                images: [...state.images, ...payload],
                loading: false
            };
        case actionTypes.RESET_IMAGES_SUCCESS:
            return {
                ...state,
                images: [],
                loading: false
            };
        default:
            return state;
    }
};