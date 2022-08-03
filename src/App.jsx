import 'assets/scss/index.scss';
import {Routes, Route} from "react-router-dom";
import Main from "views/Main";
import Hello from "views/Hello";
import Header from "layouts/ui/Header"
import Register from "views/auth/Register";
import Login from 'views/auth/Login';
import Avatar from '@mui/material/Avatar';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const auth_path = '/auth';
const diary_path = '/diary';

function App() {
	return (
		<div className="App">
			<div id="header">
				{<Header/>}
			</div>
			<div id="body" className="oneuleun-app-body">
				<div id="nav">
					<div id="lnb">
						<ul className='lnb-list'>
							<li className='lnb-item'>
								<a href="/diary" className='btn-lnb'>
									<Avatar sx={{ background: '#fff', margin: '0 auto' }}>
										<ImportContactsIcon  sx={{ color: '#333', fontSize: '2rem' }} />
									</Avatar>
									<span className='lnb-title'>일기장</span>
								</a>
							</li>
							<li className='lnb-item'>
								<a href="/emotion" className='btn-lnb'>
									<Avatar sx={{ background: '#fff', margin: '0 auto' }}>
										<SentimentSatisfiedAltIcon  sx={{ color: '#333', fontSize: '2rem' }} />
									</Avatar>
									<span className='lnb-title'>나의 기분</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div id="main">
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
