import logo_smile from 'assets/images/logo_smile_dark.png'

const LoginFailed = () => {
  return (
    <div className='bg-white auth_wrap'>
      <div className='login_box '>
        <h1 className='logo_smile'>
          <img src={ logo_smile } alt="" />
        </h1>

        <div className='login_form login_failed_form'>
          <div className='login_failed_text'>로그인에 실패하였습니다.</div>

          <div className='form_content'>
            <button className='theme-btn submit_btn' onClick={() => {window.location.href = ""}}>아이디 찾기</button>
          </div>
          <div className='form_content'>
            <button className='theme-btn submit_btn' onClick={() => {window.location.href = ""}}>비밀번호 찾기</button>
          </div>
          <div className='form_content'>
            <button className='theme-btn submit_btn' onClick={() => {window.location.href = ""}}>다시 로그인하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginFailed;