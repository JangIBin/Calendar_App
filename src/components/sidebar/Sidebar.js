import React from 'react';

// CSS, Image
import './Sidebar.css';
import img from '../../img/day.jpg';

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSort, faSearch, faClock, faCog, faCaretRight, faStar
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
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
    	  <div className="setting-name">Settings</div>
    	</div>
    	<div className="sidebar-addpage">
    	  <div className="todolist">
    	    <i><FontAwesomeIcon icon={faCaretRight} /></i>
    	    <img src={img} alt="day" />
    	    <div className="addpage-name">Calendar</div>
    	  </div>
    	</div>
    	<div className="sidebar-todolist">
    	  <p>+</p>
    	  <div className="addpage-name">Add a page</div>
    	</div>
    	<div className="empty"></div>
    	<hr />
    	<div className="sidebar-footer">
    		<div className="footer-name">Copyright Daelim University College JangIBin</div>
    	</div>
    </div>
  )
}

export default Sidebar;