import React, {component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// CSS, Image
import './Main.css';
import img from '../img/day.jpg';

// FontAwesomeIcon
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
  faStar
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from './Sidebar';
import Header from './Header';

function Main() {
    return (
        <div className="Main">

            {/* <Sidebar />
            <Header /> */}
            <div className="main">
                <div className="main-background-1"></div>
                <div className="main-background-2">
                    <div className="background-2-wrap">
                        <img src={img} />
                        <div className="main-title">
                            To Do List
                        </div>
                        <div className="main-subtitle">
                            Calendar_App with Notion
                        </div>
                        <div className="main-icon">
                            <div className="icon-school">
                                <i><FontAwesomeIcon icon={faGraduationCap} /></i>
                                <p>근로</p>
                            </div>
                            <div className="icon-company">
                                <i><FontAwesomeIcon icon={faLaptop} /></i>
                                <p>인턴</p>
                            </div>
                        </div>
                        <div className="main-schedule">
                            <div className="schedule-title">
                                <p>일정</p>
                            </div>
                            <div className="schedule-right">
                                <i><FontAwesomeIcon icon={faSearch} className="right-icon" /></i>
                                <p>검색</p>
                                <i><FontAwesomeIcon icon={faExpandAlt} className="right-icon" /></i>
                                <i><FontAwesomeIcon icon={faEllipsisH} className="right-icon" /></i>
                            </div>
                            <div className="btn_group">
                                <button className="test_btn1">새로 만들기</button>
                                <button className="test_btn2">
                                    <i><FontAwesomeIcon icon={faChevronDown} /></i>
                                </button>
                            </div>
                            <div className="schedule-hr">
                                <hr />
                            </div>
                            <div className="schedule-bottom">
                                <p>2021년 1월</p>
                            </div>
                            <div className="schedule-bottom-right">
                                <i><FontAwesomeIcon icon={faChevronLeft} /></i>
                                <p>오늘</p>
                                <i><FontAwesomeIcon icon={faChevronRight} /></i>
                            </div>
                        </div>
                        <div className="main-calendar">
                            <table>
                                <thead>
                                    <tr>
                                        <td>일</td>
                                        <td>월</td>
                                        <td>화</td>
                                        <td>수</td>
                                        <td>목</td>
                                        <td>금</td>
                                        <td>토</td>
                                    </tr>
                                </thead>
                                <tr>
                                    <td className="first-line">27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td>
                                        <label>1</label>
                                        <div className="td-link">
                                            <Link to="/test"><p>새해</p></Link>
                                        </div>
                                    </td>
                                    <td className="last-line">2</td>
                                </tr>
                                <tr>
                                    <td className="first-line">3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td className="last-line">9</td>
                                </tr>
                                <tr>
                                    <td className="first-line">10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td className="last-line">16</td>
                                </tr>
                                <tr>
                                    <td className="first-line">17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td className="last-line">23</td>
                                </tr>
                                <tr>
                                    <td className="first-line">24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td className="last-line">30</td>
                                </tr>
                                <tr>
                                <td className="first-line">31</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td className="last-line">6</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;