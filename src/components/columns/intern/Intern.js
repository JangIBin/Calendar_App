import React, { useEffect, useState } from 'react';

import './Intern.css';
import '../../../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

import AddComment from './AddComment';
import CommentList from './CommentList';

import {firestore} from "../../../firebase/firebase";

function Intern() {

  const [inputs, setInputs] = useState("");

  const [users, setUsers] = useState([]);

  const {comment} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  //firestore
  const onSend = (e) => {
    e.preventDefault();

    firestore.collection("intern").add({
      comment
    });

    setInputs("");

    console.log(users);
  }

  useEffect(() => {
    firestore.collection("intern")
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({ id: doc.id, comment: doc.data().comment }))
        )
      })
  }, []);
  // 여기까지 firestore

  return (
    <div className="Intern">
      <div className="intern">
        <div className="intern-background">
          <div className="intern-background-wrap">
            <div className="background-wrap-title">
              <span>인턴</span>
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
            <AddComment comment={comment} onChange={onChange} onSend={onSend} />
            <CommentList users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;