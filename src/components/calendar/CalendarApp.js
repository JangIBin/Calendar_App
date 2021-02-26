import React, {useState, useEffect} from 'react';
import moment from 'moment';

import './CalendarApp.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight, faTrash,
} from "@fortawesome/free-solid-svg-icons";

import buildCalendar from "./build";
import dayStyles from './styles';
import ModalPage from '../modal/ModalPage';

import {firestore} from "../../firebase/firebase"; 


function CalendarApp() {
	const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const [users, setUsers] = useState([]);

  const [inputs, setInputs] = useState("");
	const {title, comment} = inputs;


  const dayWeek = ["일", "월", "화", "수", "목", "금", "토"];

  console.log(users);

  const onSendSchool = (e,day) => {
    day = parseInt(day.format('YYYYMMDD'))

    e.preventDefault();

    firestore.collection("calendar").add({
      title: "학교",
      comment: "School",
      day
    });

    setInputs("");
  }

  const onSendIntern = (e,day) => {
    day = parseInt(day.format('YYYYMMDD'))

    e.preventDefault();

    firestore.collection("calendar").add({
      title: "인턴",
      comment: "Intern",
      day
    });

    setInputs("");
  }
  
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onSend = (e,day) => {
    day = parseInt(day.format('YYYYMMDD'))

    e.preventDefault();

    firestore.collection("calendar").add({
      title,
      comment,
      day,
    });

    setInputs("");
  }

  useEffect(() => {
    setCalendar(buildCalendar(value));
    
    firestore.collection("calendar")
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => (
            {
              id: doc.id, 
              title: doc.data().title, 
              comment: doc.data().comment, 
              day: doc.data().day,
            }
          ))
        );
      });
  },[value]); 

  // useMemo(() => {
  //   const a = 1 + buildCalend;
  //   return a
  // }, [buildCalend]); // 변수
  // useCallback(() => {}, []);  // 함수

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
    <table className="table">
      <thead>
        <tr>
          {
            dayWeek.map((d, index) => (
              <th key={index} className="week">{d}</th>
            ))
          }
        </tr>
      </thead>
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
                      onSend={(e)=>onSend(e,day)} 
                      onSendSchool={(e) => onSendSchool(e,day)} 
                      onSendIntern={(e) => onSendIntern(e,day)}
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
                            <button onClick={(e) => firestore.collection("calendar").doc(user.id).delete()}>
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