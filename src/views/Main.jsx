import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div>
      안녕하세요
      <Link to='/hello'>헬로우</Link>
    </div>
  )
}

export default Main;