import './App.css';
import './reset.css';
import img from './img/day.jpg';
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

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
            <i><FontAwesomeIcon icon={faStar} /></i>
            <div className="name">GamJarin</div>
            <i><FontAwesomeIcon icon={faSort} /></i>
        </div>

        <div className="sidebar-setting">
            <i><FontAwesomeIcon icon={faSearch} /></i>
            <div className="setting-name">Quick Find</div>
        </div>
        <div className="sidebar-settings">
            <i><FontAwesomeIcon icon={faClock} /></i>
            <div className="setting-name">All Updates</div>
        </div>
        <div className="sidebar-settings">
            <i><FontAwesomeIcon icon={faCog} /></i>
            <div className="setting-name">Settings & Members</div>
        </div>

        <div className="sidebar-addpage">
            <div className="todolist">
                <i><FontAwesomeIcon icon={faCaretRight} /></i>
                <img src={img}/>
                <div className="addpage-name">To Do List</div>
            </div>
        </div>
        <div className="sidebar-todolist">
            <p>+</p>
            <div className="addpage-name">Add a page</div>
        </div>

        <div className="sidebar-service">
            <div className="templates">
                <i><FontAwesomeIcon icon={faMailBulk} /></i>
                <div className="service-name">Templates</div>
            </div>
            <div className="templates">
                <i><FontAwesomeIcon icon={faDownload} /></i>
                <div className="service-name_2">Import</div>
            </div>
            <div className="templates">
                <i><FontAwesomeIcon icon={faTrash} /></i>
                <div className="service-name_3">Trash</div>
            </div>
        </div>
        <div className="empty"></div>
        <hr />
        <div className="sidebar-footer">
            <p>+</p>
            <div className="footer-name">New page</div>
        </div>
    </div>

    <div className="header">
        <div className="header-left">
            <i><FontAwesomeIcon icon={faArrowLeft} /></i>
            <i><FontAwesomeIcon icon={faArrowRight} /></i>
            <img src={img} />
            <div className="header-name">To Do List</div>
        </div>

        <div className="header-right">
            <p>Share</p>
            <p>Updates</p>
            <p>Favorite</p>
            <i><FontAwesomeIcon icon={faEllipsisH} /></i>
        </div>
    </div>

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
                        <p>2020년 12월</p>
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
                            <td className="first-line">29</td>
                            <td>30</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td className="last-line">5</td>
                        </tr>
                        <tr>
                            <td className="first-line">6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td className="last-line">12</td>
                        </tr>
                        <tr>
                            <td className="first-line">13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td className="last-line">19</td>
                        </tr>
                        <tr>
                            <td className="first-line">20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td className="last-line">26</td>
                        </tr>
                        <tr>
                            <td className="first-line">27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td>1</td>
                            <td className="last-line">2</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
