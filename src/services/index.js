import axios from 'axios';

const apiUrl = 'https://oneuleun-dev.o-r.kr/';

export const get = (url) => {
  return axios.get(apiUrl + url);
};