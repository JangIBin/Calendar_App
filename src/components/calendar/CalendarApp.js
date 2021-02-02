import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';

import './CalendarApp.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight, faTrash,
} from "@fortawesome/free-solid-svg-icons";

import buildCalendar from "./build";
import dayStyles from './styles';
import ModalPage from '../modal/ModalPage';

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
    day = parseInt(day.format('YYYYMMDD'));

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

  const onSendSchool = (day) => {
    day = parseInt(day.format('YYYYMMDD'));

    const user = {
      id: nextId.current,
      title: '학교',
      comment: 'School',
      day
    };
    setUsers([...users, user]);

    setInputs({
      title:'',
      comment: ''
    });
    nextId.current += 1;
  }

  const onSendIntern = (day) => {
    day = parseInt(day.format('YYYYMMDD'));

    const user = {
      id: nextId.current,
      title: '인턴',
      comment: 'Intern',
      day
    };
    setUsers([...users, user]);

    setInputs({
      title:'',
      comment: ''
    });
    nextId.current += 1;
  }
  
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
            {week.map((day, index) => (
              <td className="day" onClick={() => setValue(day)} key={index}>
                <div className="dayBundle">
                  <div id="dayNum" className={dayStyles(day, value)}>
                    <div className="date">
                      {day.format("D").toString()}
                    </div>
                  </div>
                  <div className="dayButton">
                    <ModalPage
                      users={users} 
                      title={title} 
                      comment={comment} 
                      onChange={onChange} 
                      onSend={()=>onSend(day)} 
                      onRemove={onRemove} 
                      onSendSchool={() => onSendSchool(day)} 
                      onSendIntern={() => onSendIntern(day)}
                    />
                  </div>
                </div>
                
                <div className="dayComment">
                  {users.map((user, index) => 
                    {
                      if(user.day === parseInt(day.format('YYYYMMDD'))) {
                        return <div className="commentPlus" key={index}>
                          <div className="plus">
                            <div className="plusTitle">
                              {(user.title).length >= 7 ? (user.title).substr(0,7)+"..." : user.title}
                            </div>
                            <div className="plusComment">
                              {(user.comment).length >= 9 ? (user.comment).substr(0,9)+"..." : user.comment}
                            </div>
                          </div>
                          
                          <div className="plusButton">
                            <button onClick={() => onRemove(user.id)}>
                              <i><FontAwesomeIcon icon={faTrash}/></i>
                            </button>
                          </div>
                        </div> 
                      } else {
                        return null;
                      }
                    }
                  )}
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