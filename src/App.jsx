import 'assets/scss/index.scss';

import {Routes, Route} from "react-router-dom";
import Main from "views/Main";
import Hello from "views/Hello";
import Header from "layouts/ui/Header"

function App() {
	return (
		<div className="App">
			<div id="header">
				{<Header/>}
			</div>
			<div id="lnb">
			</div>
			<div id="body" className="oneuleun-app-body">
				<Routes>
					{/* 메인 */}
					<Route path="/" element={<Main/>}/>
					{/* 로그인 */}
					<Route path="/login" element={<Hello/>}/>
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
	);
}

export default App;
