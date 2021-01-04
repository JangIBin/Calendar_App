import React, {component} from 'react';

// CSS, Image
import './Header.css';
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

function Header() {
    return(
        <div className="Header">
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
        </div>
    )
}

export default Header;