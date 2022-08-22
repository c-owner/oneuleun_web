import React from "react";
import {KAKAO_AUTH_URL} from "../../KakaoLogin";
import login_kakao from "../../assets/images/login_kakao.png";
import {NAVER_AUTH_URL} from "../../NaverLogin";
import login_naver from "../../assets/images/login_naver.png";
const member = require('../../config/api/member.js');

const Register = () => {
	let verifyCode = '';

	let form = {
		email: '',
		password: '',
		passwordConfirm: '',
		nickname: '',
	}

	const sendVerify = async (value) => {
		console.log(value)
		const params = {
			email: value.email,
		}

		await member.verifyMail;
	}

	const submit = () => {
		console.log("submit");

	}
	let margin_right = {
		marginRight: "10px",
	}
	return (

		<div className="bg-white auth_wrap">
			<div className="register_box">

				<div className="register_form">
					<div className="auth_form">
						<div className="form_content">
							<label for="user_email">이메일</label>
							<input className="input" type="email" defaultValue={form.email}
							id="user_email" placeholder="이메일을 입력해주세요" />
							<button type="button" onClick={() => {
								sendVerify(form.email)
							}} className="submit_btn">인증 발송</button>
						</div>
						<div className="form_content">
							<label for="user_email">인증</label>
							<input className="input" type="number" defaultValue={form.fverifyCode}
							id="user_email" placeholder="인증번호를 입력해주세요" />
							<button type="button" className="submit_btn">인증 확인</button>
						</div>
						<div className="form_content">
							<label for="user_nickname">닉네임</label>
							<input className="input" type="text" defaultValue={form.nickname}
							 id="user_nickname" placeholder="닉네임을 입력해주세요.(2~12자)" />
						</div>
						<div className="form_content">
							<label for="user_passowrd">비밀번호</label>
							<input className="input" type="password" defaultValue={form.password}
							id="user_passowrd" placeholder="비밀번호을 입력해주세요" />
						</div>
						<div className="form_content">
							<label for="password_confirm">비밀번호 확인</label>
							<input className="input" type="password" id
							="password_confirm" placeholder="비밀번호 확인" />
						</div>
						<div className="form_content">
							<button type="button" className="submit_btn large" onClick={submit}>가입 신청</button>
						</div>
						<div className="social_login_box">
							<a className="social_login login_kakao" style={margin_right} href={KAKAO_AUTH_URL}>
								<img src={ login_kakao } alt="카카오로 로그인" />
							</a>
							<a className="social_login login_naver" href={NAVER_AUTH_URL}>
								<img src={ login_naver } alt="네이버로 로그인" />
							</a>
						</div>
					</div>


				</div>
			</div>
		</div>

	)

}

export default Register;
