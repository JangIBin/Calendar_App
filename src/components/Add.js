import React from 'react';

import './style/Add.css';
import '../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

function Add() {
  return (
    <div className="Add">
      <div className="add">
        <div className="add-background">
          <div className="add-background-wrap">
            <div className="background-wrap-title">
              <span>새해</span>
            </div>
            <div className="background-wrap-create">
            	<div className="wrap-create-1">
                <i><FontAwesomeIcon icon={faClock} /></i>
                <span>Created</span>
              </div>
              <div className="wrap-create-2">
                <span>Jan 4, 2021 6:29 PM</span>
              </div>
            </div>
            <div className="background-wrap-type">
              <div className="wrap-type-1">
                <i><FontAwesomeIcon icon={faCaretSquareDown} /></i>
                <span className="type">Type</span>
              </div>
              <div className="wrap-type-2">
                <span>Holiday</span>
              </div>
            </div>
            <div className="background-wrap-coment">
              <hr />
              <input type="text" placeholder="Add a comment..."/>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add;