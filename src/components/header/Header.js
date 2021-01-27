import React from 'react';

import moment from 'moment';

// CSS, Image
import './Header.css';
import img from '../../img/day.jpg';

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft, faArrowRight
} from "@fortawesome/free-solid-svg-icons";

function Header() {

  const nowTime = moment().format('YYYY년 MM월 DD일');

  return(
    <div className="Header">
      <div className="header">
        <div className="header-left">
          <i><FontAwesomeIcon icon={faArrowLeft} /></i>
          <i><FontAwesomeIcon icon={faArrowRight} /></i>
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