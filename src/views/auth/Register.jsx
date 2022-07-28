import React from "react";
const member = require('../../config/api/member.js');

const Register = () => {
	let verifyCode = '';
	
	let state = {
		email: '',
		password: '',
		passwordConfirm: '',
		nickname: '',
	}

	const sendVerify = async (value) => {
	
		const params = {
			email: value.email,
			nickname: value.nickname,
			password: value.password,
			passwordConfirm: value.passwordConfirm,
		}
		
		await member.verifyMail;
	}
	
	const submit = () => {
		console.log("submit");
	}


	return (

		<div className="bg-white auth_wrap">
			<div className="register_box">

				<div className="register_form">
					<div className="auth_form">
						<div className="form_content">
							<label for="user_email">이메일</label>
							<input className="input" type="email" value={state.email}
							id="user_email" placeholder="이메일을 입력해주세요" />
							<button type="button" onClick={sendVerify(state.email)} className="btn-1">인증 발송</button>
						</div>
						<div className="form_content">
							<label for="user_email">인증</label>
							<input className="input" type="number" value={state.fverifyCode}
							id="user_email" placeholder="인증번호를 입력해주세요" />
							<button type="button" className="btn-1">인증 확인</button>
						</div>
						<div className="form_content">
							<label for="user_nickname">닉네임</label>
							<input className="input" type="text" value={state.nickname}
							 id="user_nickname" placeholder="닉네임을 입력해주세요.(2~12자)" />
						</div>
						<div className="form_content">
							<label for="user_passowrd">비밀번호</label>
							<input className="input" type="password" value={state.password}
							id="user_passowrd" placeholder="비밀번호을 입력해주세요" />
						</div>
						<div className="form_content">
							<label for="password_confirm">비밀번호 확인</label>
							<input className="input" type="password" id
							="password_confirm" placeholder="비밀번호 확인" />
						</div>
						<div>
							<button type="button" onClick={submit}>가입 신청</button>
						</div>
					</div>


				</div>
			</div>
		</div>

	)

}

export default Register;
