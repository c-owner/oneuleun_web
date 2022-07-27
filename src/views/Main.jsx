import dot from 'assets/images/dot2.png'
import Typed from "../components/main/Typed";


const slider_arr = [
	'오늘 하루는 어떠셨나요?',
	'오늘의 일기를 작성해보세요.',
	'당신은 사랑받기 위해 태어난 사람.',
];

const Main = (props) => {

	const dot2 = {
		backgroundImage: `url(${dot})`,
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
	}

	return (
		<div className="intro">
			<div className="overlay-intro" style={dot2}></div>
			<div className="intro-content top0 display-table">
				<div className="table-cell">
					<div className="container text-center">
						{/*<p className="title mb50 text-slider">오늘 하루 어떠셨나요?</p>*/}
						<div className="mb50">
							<Typed loop={true} text={slider_arr[Math.floor(Math.random() * slider_arr.length)]} speed={120}/>
						</div>

						<div className="intro_btn_wrap m-w35 space-around flex item-center center-block">
							<button onClick={() => {
								window.location.href = '/diary';
							}} variant="outlined" >일기 시작하기</button>
							<button onClick={() => {
								window.location.href = '/calendar';
							}} variant="outlined">캘린더 확인하러가기</button>
							<button onClick={() => {
								window.location.href = "/mypage";
							}} variant="outlined">내 프로필 설정하기</button>
							<button onClick={() => {
								window.location.href = "/auth/login";
							}} variant="outlined">로그인 하기</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main;
