import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

// CSS, Image
import './style/Main.css';
import img from '../img/day.jpg';

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faEllipsisH, faGraduationCap, faLaptop, faExpandAlt, faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import CalendarApp from './calendar/CalendarApp';

function Main() {
  return (
    <div className="Main">
      <div className="main">
        <div className="main-background-1"></div>
        <div className="main-background-2">
          <div className="background-2-wrap">
            <img src={img} alt="day" />
            <div className="main-title">
              Calendar
            </div>
            <div className="main-subtitle">
              Calendar_App with Notion
            </div>
            <div className="main-icon">
              <div className="icon-school">
                <i><FontAwesomeIcon icon={faGraduationCap} /></i>
                <Link to="/school"><p>학교</p></Link>
              </div>
              <div className="icon-company">
                <i><FontAwesomeIcon icon={faLaptop} /></i>
                <Link to="/intern"><p>인턴</p></Link>
              </div>
            </div>
            <div className="main-schedule">
              <div className="schedule-title">
                <p>Calendar</p>
              </div>
              <div className="schedule-right">
                <i><FontAwesomeIcon icon={faSearch} className="right-icon" /></i>
                <p>검색</p>
                <i><FontAwesomeIcon icon={faExpandAlt} className="right-icon" /></i>
                <i><FontAwesomeIcon icon={faEllipsisH} className="right-icon" /></i>
              </div>
              <div className="btn_group">
                <button className="test_btn1">새로 만들기</button>
                <button className="test_btn2">
                	<i><FontAwesomeIcon icon={faChevronDown} /></i>
                </button>
              </div>
              <div className="schedule-hr">
                <hr />
              </div>
            </div>
            <div className="main-calendar">
                  <CalendarApp  />
          	</div>
        	</div>
      	</div>
    	</div>
  	</div>
  )
}

export default Main;