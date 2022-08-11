import axios from 'axios';

const api_url = 'https://oneuleun-dev.o-r.kr/api/v1';


export const get = (url, params) => {
    let headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return axios.get(api_url + url, {headers: headers, params: params});
}
export const post = (url, params) => {
    let headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    return axios.post(api_url + url, {headers: headers, params: params});
}
export const put = (url, params) => {
    let headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    return axios.put(api_url + url, {headers: headers, params: params});
}
export const dels = (url, params) => {
    let headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    return axios.delete(api_url + url, {headers: headers, params: params});
}
