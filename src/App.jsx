import 'assets/scss/index.scss';
import {Routes, Route} from "react-router-dom";
import Main from "views/Main";
import Hello from "views/Hello";
import Header from "layouts/ui/Header"
import Register from "views/auth/Register";
import Login from 'views/auth/Login';
import Layout from 'layouts/Layout';

const auth_path = '/auth';

function App() {
	return (
		<div className="App">
			<div id="header">
				{<Header/>}
			</div>
			<div className="oneuleun-app-body">
				<Layout />
				<div>
					<div className='scroll-area'>
							<Routes>
								{/* 메인 */}
								<Route path="/" element={<Main/>}/>
								{/* 로그인 */}
								<Route path={auth_path + '/login'} element={<Login/>}/>
								{/* 회원가입 */}
								<Route path={auth_path + '/register'} element={<Register/>}/>
								{/* 일기장 */}
								<Route path="/diary" element={<Hello/>}/>
								{/* 일기장 작성 */}
								<Route path="/diary/add" element={<Hello/>}/>
								{/* 일기장 상세 */}
								<Route path="/diary/:id" element={<Hello/>}/>
								{/* 일기장 상세 수정 및 삭제 */}
								<Route path="/diary/edit/:id" element={<Hello/>}/>
								{/* 나의 감정 */}
								<Route path="/emotion" element={<Hello/>}/>
								{/* 마이페이지 */}
								<Route path="/mypage" element={<Hello/>}/>
								{/* 회원가입 */}
								<Route path="/register" element={<Hello/>}/>
							</Routes>
						</div>
					</div>
			</div>
		</div>
	);
}

export default App;
