const REST_API_KEY = "d49125771d0cf710fa9e2208c89db032";
const REDIRECT_URI =  "http://127.0.0.1:3000/";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;