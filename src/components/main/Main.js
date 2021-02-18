import React from 'react';
import { Link } from 'react-router-dom';

// CSS, Image
import './Main.css';

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap, faLaptop
} from "@fortawesome/free-solid-svg-icons";

import CalendarApp from '../calendar/CalendarApp';

function Main() {
  return (
    <div className="Main">
      <div className="main">
        <div className="main-background-1"></div>
        <div className="main-background-2">
          <div className="background-2-wrap">
            <div className="main-title">
              Calendar
            </div>
            <div className="main-subtitle">
              Daelim University College JangIBin
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