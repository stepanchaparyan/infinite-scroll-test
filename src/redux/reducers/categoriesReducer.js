import * as actionTypes from '../constants/categoriesConstants';

export const categoriesReducer = (state = { categoriesItems: [], loading: false }, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_CATEGORIES_REQUEST:
        case actionTypes.GET_CATEGORIES_FAIL:
            return {
                loading: true,
                error: payload
            };

        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                categories: payload,
                loading: false
            };
        default:
            return state;
    }
};