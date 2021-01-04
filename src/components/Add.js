import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './Add.css';
import '../reset.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSearch,
  faClock,
  faCog,
  faCaretRight,
  faMailBulk,
  faDownload,
  faTrash,
  faArrowLeft,
  faArrowRight,
  faEllipsisH,
  faGraduationCap,
  faLaptop,
  faExpandAlt,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faStar,
  faCaretSquareDown
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
                            <i><FontAwesomeIcon icon={faClock} /></i>
                            <span className="created">Created</span>
                            <span>Jan 4, 2021 6:29 PM</span>
                        </div>
                        <div className="background-wrap-type">
                            <i><FontAwesomeIcon icon={faCaretSquareDown} /></i>
                            <span className="type">Type</span>
                            <span>Holiday</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;