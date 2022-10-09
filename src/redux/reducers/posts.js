import {
    GET_SOCIALPOST_SUCCESS,
    GET_SOCIALPOST_FAIL,
} from '../actions/types';


const initialState = {
    posts: null,
};

export default function Posts(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SOCIALPOST_SUCCESS:
            return {
                ...state,
                posts: payload.posts
            }
        case GET_SOCIALPOST_FAIL:
            return {
                ...state,
                posts: null
            }
        default:
            return state
    }
}