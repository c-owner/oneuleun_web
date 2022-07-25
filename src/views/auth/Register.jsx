import React, { useState } from "react";

import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControl,
	FormControlLabel,
	Checkbox,
	FormHelperText,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;
const Register = () => {

	const theme = createTheme();
	const [checked, setChecked] = useState(false);

	// 동의 체크
	const handleAgree = (event) => {
		setChecked(event.target.checked);
	};

	// form 전송
	const handleSubmit = (e) => {
		e.preventDefault();
	};


	return (
		<div className="bg-white auth_wrap">

			<div className="register_box">
				<ThemeProvider theme={theme}>
					<Container component="main" maxWidth="xs">
						<CssBaseline />
						<Box
							sx={{
								marginTop: 8,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
							<Typography component="h1" variant="h5">
								회원가입
							</Typography>
							<Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
								<FormControl component="fieldset" variant="standard">
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<TextField
												required
												autoFocus
												fullWidth
												type="email"
												id="email"
												name="email"
												label="이메일 주소"
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												required
												fullWidth
												type="password"
												id="password"
												name="password"
												label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												required
												fullWidth
												type="password"
												id="rePassword"
												name="rePassword"
												label="비밀번호 재입력"
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField required fullWidth id="name" name="name" label="이름" />
										</Grid>
										<Grid item xs={12}>
											<FormControlLabel
												control={<Checkbox onChange={handleAgree} color="primary" />}
												label="회원가입 약관에 동의합니다."
											/>
										</Grid>
									</Grid>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 3, mb: 2 }}
										size="large"
									>
										회원가입
									</Button>
								</FormControl>
							</Boxs>
						</Box>
					</Container>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Register;
