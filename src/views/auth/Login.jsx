import React from 'react';
import logo_smile from 'assets/images/logo_smile_dark.png'
import { KAKAO_AUTH_URL } from 'KakaoLogin';
import { Button } from '@mui/material';

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
              <Button className='submit_btn' type="submit">로그인 하기</Button>
            </div>
          </form>
          <div className='social_login_box'>
            <Button href={ KAKAO_AUTH_URL }>카카오로 로그인하기</Button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Login;