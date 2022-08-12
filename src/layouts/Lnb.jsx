import React from 'react';
import Avatar from '@mui/material/Avatar';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Lnb = () => {
  return (
    <div id="nav">
      <div id="lnb">
        <ul className='lnb-list'>
          <li className='lnb-item'>
            <a href="/diary" className='btn-lnb'>
              <Avatar sx={{ background: '#fff', margin: '0 auto' }}>
                <ImportContactsIcon sx={{ color: '#333', fontSize: '2rem' }} />
              </Avatar>
              <span className='lnb-title'>일기장</span>
            </a>
          </li>
          <li className='lnb-item'>
            <a href="/emotion" className='btn-lnb'>
              <Avatar sx={{ background: '#fff', margin: '0 auto' }}>
                <SentimentSatisfiedAltIcon sx={{ color: '#333', fontSize: '2rem' }} />
              </Avatar>
              <span className='lnb-title'>나의 기분</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Lnb;
