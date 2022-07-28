import React from 'react';
import logo_smile from 'assets/images/logo_smile_dark.png'
import login_kakao from 'assets/images/login_kakao.png';
import login_naver from 'assets/images/login_naver.png';
import { KAKAO_AUTH_URL } from 'services/kakaoLogin';
import { NAVER_AUTH_URL } from 'services/naverLogin';

const Login = () => {
  return (
    <div className='bg-white auth_wrap'>
      <div className='login_box'>

        <h1 className='logo_smile'>
          <img src={ logo_smile } alt="" />
        </h1>
        <div className='login_form'>
          <form action="submit">
            <div className='form_content'>
              <input className='input' type="email" id="user_email" placeholder="이메일을 입력해주세요" />
            </div>
            <div className='form_content'>
              <input className='input' type="password" id="user_password" placeholder="비밀번호를 입력해주세요" />
            </div>
            <div className='form_content login_checkbox'>
              <input type="checkbox" id='login_checkbox' />
              <label htmlFor="login_checkbox">아이디 / 비밀번호 기억하기</label>
            </div>
            <div className='form_content'>
              <button className='theme-btn submit_btn'>로그인 하기</button>
            </div>
          </form>
          <div className='social_login_box'>
            <a className='social_login login_kakao' href={KAKAO_AUTH_URL}>
              <img src={ login_kakao } alt="카카오로 로그인" />
            </a>
            <a className='social_login login_naver' href={NAVER_AUTH_URL}>
              <img src={ login_naver } alt="네이버로 로그인" />
            </a>
          </div>
        </div>
      </div>
      <ul>
        <li><div>로그인 실패</div></li>
        <li><div>비번 찾기 1</div></li>
        <li><div>비번 찾기 2</div></li>
        <li><div>비번 찾기 3</div></li>
        <li><div>비번 찾기 4</div></li>
      </ul>
    </div> 
  );
}

export default Login;