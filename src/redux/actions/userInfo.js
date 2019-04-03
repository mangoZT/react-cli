import axios from 'axios';

export const GET_USER_INFO = "userInfo/GET_USER_INFO";

export function getUserInfo() {
    return dispatch=>{
        axios.post('/api/user').then((res)=>{
            let data = JSON.parse(res.request.responseText);
            dispatch({
                type: GET_USER_INFO,
                payload:data
            });
        })
    }
}