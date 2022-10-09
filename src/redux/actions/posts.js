import axios from 'axios';

import {
    GET_SOCIALPOST_SUCCESS,
    GET_SOCIALPOST_FAIL,
} from './types';

export const get_posts = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try { 
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/social/get-socialPost`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_SOCIALPOST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SOCIALPOST_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_SOCIALPOST_FAIL
        });
    }
};