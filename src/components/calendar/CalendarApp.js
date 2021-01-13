import React, {useState, useEffect} from 'react';
import moment from 'moment';

import './CalendarApp.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import buildCalendar from "./build";
import dayStyles from './styles';

function CalendarApp() {
	const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  },[value]);

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  return (
    <div className="calendar">
      <div className="thead">
        <span>{value.format('YYYY년 MM월')}</span>
        <div className="control-btn">
          <button onClick={() => {setValue(prevMonth())}}><i><FontAwesomeIcon icon={faChevronLeft}/></i></button>
          <button onClick={() => {setValue(nextMonth())}}><i><FontAwesomeIcon icon={faChevronRight}/></i></button>
        </div>
        
      </div>
      <tbody className="tbody-calendar">
        <div className="day-names">
          {
            ["일", "월", "화", "수", "목", "금", "토"].map((d) => (
              <div className="week">{d}</div>
            ))
          }
        </div>
      {
        calendar.map((week) => (
          <tr>
            {week.map((day) => (
              <td className="day" onClick={() => setValue(day)}>
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </td>
            ))}
          </tr>
        ))
      }
  	  </tbody>
    </div>
    
  )
}

export default CalendarApp;