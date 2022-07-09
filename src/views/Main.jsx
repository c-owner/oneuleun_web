import dot from 'assets/images/dot2.png'
import ThemeButton from "../components/ui/ThemeButton";

const Main = () => {
	const dot2 = {
		backgroundImage: `url(${dot})`,
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
	}
  return (
    <div className="intro" >
		<div className="overlay-intro" style={dot2}></div>
		<div className="intro-content top0 display-table">
			<div className="table-cell">
				<div className="container text-center">
					<p className="title mb50">오늘 하루 어떠셨나요?</p>
					<div className="m-w35 space-around flex item-center center-block">
						<ThemeButton onClick={() => {
							window.location.href = '/diary';
						}} variant="contained">일기 시작하기</ThemeButton>
						<ThemeButton onClick={() => {
							window.location.href = '/calendar';
						}} variant="contained">캘린더 확인하러가기</ThemeButton>
						<ThemeButton onClick={() => {
							window.location.href = "/mypage";
						}} variant="contained">내 프로필 설정하기</ThemeButton>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Main;
