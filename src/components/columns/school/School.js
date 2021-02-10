import React, { useState, useEffect } from 'react';

import './School.css';
import '../../../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

import AddSchool from './AddSchool';
import SchoolList from './SchoolList';

import {firestore} from "../../../firebase/firebase";

function School() {

  const [inputs, setInputs] = useState({
    comment: ''
  });
  const {comment} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([]);

  //firestore
  const onSendSchool = (e) => {
    e.preventDefault();

    firestore.collection("school").add({
      comment
    });

    setInputs("");
  }

  useEffect(() => {
    firestore.collection("school")
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({ id: doc.id, comment: doc.data().comment }))
        )
      })
  }, []);
  // 여기까지 firestore

  return (
    <div className="School">
      <div className="school">
        <div className="school-background">
          <div className="school-background-wrap">
            <div className="background-wrap-title">
              <span>학교</span>
            </div>
            <div className="background-wrap-create">
            	<div className="wrap-create-1">
                <i><FontAwesomeIcon icon={faClock} /></i>
                <span>Created</span>
              </div>
              <div className="wrap-create-2">
                <span>Jan 5, 2021 1:39 PM</span>
              </div>
            </div>
            <div className="background-wrap-type">
              <div className="wrap-type-1">
                <i><FontAwesomeIcon icon={faCaretSquareDown} /></i>
                <span className="type">Type</span>
              </div>
              <div className="wrap-type-2">
                <select className="selectDay" name="selectDay">
                  <option value="holiday">Holiday</option>
                  <option value="weekday">Weekday</option>
                </select>
              </div>
            </div>
            <AddSchool comment={comment} onChange={onChange} onSendSchool={onSendSchool} />
            <SchoolList users={users} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default School;