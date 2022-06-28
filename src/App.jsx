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
}

export default App;
