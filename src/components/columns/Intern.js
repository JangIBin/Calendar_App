import React, { useCallback, useState } from 'react';

import './Intern.css';
import '../../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

import AddComment from './AddComment';
import CommentList from './CommentList';

import {firestore} from "../../firebase/firebase";

function Intern() {

  const [inputs, setInputs] = useState({
    comment: ''
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      comment: '데이터 삭제, 추가, 수정 구현'
    },
    {
      id: 2,
      comment: 'calendar에 일정추가하기'
    },
    {
      id: 3,
      comment: '프로젝트 완료하기'
    }
  ]);

  const {comment} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onSend = () => {
    const user = {
      id:users.length+1,
      comment
    };
    setUsers([...users, user]);

    setInputs({
      comment: ''
    });
    users.length += 1;
    console.log(user);
  }

  const onRemove = (id) => {
    //user.id 가 id 인 것을 제거
    setUsers(users.filter(user => user.id !== id));
  }

  const onUpdate = (id) => {
    setUsers(users.map(
      user => id === user.id ? {...user, comment: !user.comment} : user
    ));
  }

  const fetchData = useCallback(() => {
    //받아온 데이터를 저장할 배열
    let internData = [];

    // firestore.js에서 가져온 firestore 객체
    firestore
      .collection("intern") // "intern" 컬렉션 반환
      .get() // "intern" 컬렌셕의 모든 다큐먼트를  갖는 프로미스 반환
      .then((docs) => {
        // data(). id로 다큐먼트 필드, id 조회
        internData.push()
      })
  })

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
            <AddComment onChange={onChange} onSend={onSend} />
            <CommentList comment={comment} users={users} onRemove={onRemove} onUpdate={onUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;