import React from "react";
import {TextField} from "@mui/material";

const Register = () => {
	const styleOptions = {
		width: '100%',
	}
	return (
		<div className="bg-white auth_wrap">
			<div className="register_box">

				<div className="register_form">
					<div>
						<TextField style={styleOptions} id="outlined-basic" label="이름" variant="outlined" />
					</div>
					<div>

						<TextField id="outlined-basic" type={"email"} label="아이디" variant="outlined" />
					</div>
					<div>

						<TextField id="outlined-basic" type={"password"} label="비밀번호" variant="outlined" />
					</div>
					<div>

						<TextField id="outlined-basic" type={"password"} label="비밀번호 확인" variant="outlined" />
					</div>
				</div>

			</div>
		</div>
	)
}

export default Register;
