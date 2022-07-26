import React from "react";
import {TextField} from "@mui/material";

const Register = () => {
	const submit = () => {

	}
	return (
		<div className="bg-white auth_wrap">
			<div className="register_box">

				<div className="register_form">
					<form onSubmit={submit()} className="auth_form">
						<div className="form_content">
							<label for="user_email">이메일</label>
							<input type="email" id="user_email" placeholder="이메일을 입력해주세요" />
						</div>
						<div className="form_content">
							<label for="user_nickname">닉네임</label>
							<input type="text" id="user_nickname" placeholder="닉네임을 입력해주세요.(2~12자)" />
						</div>
						<div className="form_content">
							<label for="user_passowrd">비밀번호</label>
							<input type="password" id="user_passowrd" placeholder="비밀번호을 입력해주세요" />
						</div>
						<div className="form_content">
							<label for="password_confirm">비밀번호 확인</label>
							<input type="password" id="password_confirm" placeholder="비밀번호 확인" />
						</div>

					</form>


				</div>
			</div>
		</div>
	)
}

export default Register;
