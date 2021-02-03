import React from 'react';

import moment from 'moment';

// CSS, Image
import './Header.css';
import img from '../../img/day.jpg';

function Header() {

  const nowTime = moment().format('YYYY년 MM월 DD일');

  return(
    <div className="Header">
      <div className="header">
        <div className="header-left">
          <img src={img} alt="day" />
          <div className="header-name">Calendar</div>
        </div>

        <div className="header-right">
          <div>{nowTime}</div>
        </div>
      </div>
  	</div>
  )
}

export default Header;