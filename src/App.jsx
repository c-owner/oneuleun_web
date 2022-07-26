<<<<<<< HEAD
import './assets/scss/index.scss';
import { Routes, Route } from "react-router-dom";
import Header from './layouts/Header';
import Main from "./views/Main";
import Hello from "./views/Hello"
import Lnb from './layouts/Lnb';

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header/>
      </div>
      <div id="lnb">
        <Lnb/>
      </div>
        <div id="body" className="oneuleun-app-body">
            <Routes>
              <Route path="/" element={<Main />}/> {/* 메인 */}
              <Route path="/login" element={<Hello/>}/> {/* 로그인 */}
              <Route path="/diary" element={<Hello/>}/> {/* 일기장 */}
              <Route path="/diary/add" element={<Hello/>}/> {/* 일기장 작성 */}
              <Route path="/diary/:id" element={<Hello/>}/> {/* 일기장 상세 */}
              <Route path="/diary/edit/:id" element={<Hello/>}/> {/* 일기장 상세 수정 및 삭제 */}
              <Route path="/emotion" element={<Hello/>}/> {/* 나의 감정 */}
              <Route path="/mypage" element={<Hello/>}/> {/* 마이페이지 */}
              <Route path="/register" element={<Hello/>}/> {/* 회원가입 */}
            </Routes>
        </div>
    </div>
  );
=======
import 'assets/scss/index.scss';

import {Routes, Route} from "react-router-dom";
import Main from "views/Main";
import Hello from "views/Hello";
import Header from "layouts/ui/Header"
import Register from "views/auth/Register";

const auth_path = '/auth';
const diary_path = '/diary';

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
					<Route path={auth_path + '/login'} element={<Hello/>}/>
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
	);
>>>>>>> 63db8e123139c3c598eefa05207efc7c04bffd2d
}

export default App;
