import React, {useState, useEffect} from 'react';
import moment from 'moment';

import './CalendarApp.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import buildCalendar from "./build";
import dayStyles from './styles';
import ModalPage from '../modal/ModalPage';
// import ModalList from '../modal/ModalList';

function CalendarApp() {
	const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const dayWeek = ["일", "월", "화", "수", "목", "금", "토"];

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
      <div className="calendar-header">
        <span>{value.format('YYYY년 MM월')}</span>
        <div className="control-btn">
          <button onClick={() => {setValue(prevMonth())}}><i><FontAwesomeIcon icon={faChevronLeft}/></i></button>
          <button onClick={() => {setValue(nextMonth())}}><i><FontAwesomeIcon icon={faChevronRight}/></i></button>
        </div>
      </div>
      <div className="day-names">
      {
        dayWeek.map((d, index) => (
          <div key={index} className="week">{d}</div>
        ))
      }
    </div>
    <table className="table">
      <tbody className="tbody">
      {
        calendar.map((week, index) => (
          <tr key={index}>
            {week.map((day) => (
              <td className="day" onClick={() => setValue(day)}>
                <div id="dayNum" className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
                <div className="dayButton">
                  <ModalPage />
                </div>
              </td>
            ))}
          </tr>
        ))
      }
  	  </tbody>
    </table>    
  </div>
  )
}

export default CalendarApp;