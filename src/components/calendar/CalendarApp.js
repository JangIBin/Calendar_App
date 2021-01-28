import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';

import './CalendarApp.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import buildCalendar from "./build";
import dayStyles from './styles';
import ModalPage from '../modal/ModalPage';

import comment from '../modal/ModalComment';
import ModalComment from '../modal/ModalComment';
import { useTheme } from 'styled-components';

function CalendarApp() {
	const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const [users, setUsers] = useState([]);

  const [inputs, setInputs] = useState({
		title:'',
		comment:''
	});
	const {title, comment} = inputs;


  const dayWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const nextId = useRef(1);
  const onSend = (day) => {
    day = parseInt(day.format('DD'));

    const user = {
			id: nextId.current,
			title,
      comment,
      day
    };
    setUsers([...users, user]);

    setInputs({
			title:'',
			comment:''
    });
    nextId.current += 1;
  }
  console.log(users);
  
	const onRemove = (id) => {
		setUsers(users.filter(user => user.id !== id))
  }
  
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  const onComment = (day, user) => {
    if(users.day === parseInt(day.format('D'))) {
      return (
        <div>{user.title}</div>,
        <div>{user.comment}</div>
      )
    } else {
      return null;
    }
  }

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
            {week.map((day, index, user) => (
              <td className="day" onClick={() => setValue(day)} key={index}>
                <div id="dayNum" className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
                <div className="dayButton">
                  <ModalPage users={users} title={title} comment={comment} onChange={onChange} onSend={()=>onSend(day)} onRemove={onRemove} />
                </div>
                <div className="dayComment">
                  {users.map((user, index) => (
                    <div key={index}>{user.title}</div>
                  ))}
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