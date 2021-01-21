import React from 'react';

// router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS, Image
import './App.css';
import './reset.css';

// Components
import Sidebar from "./components/sidebar/Sidebar"; 
import Header from "./components/header/Header";
import Main from './components/main/Main';
import Intern from './components/columns/Intern';
import School from './components/columns/School';

// import {Sidebar, Header, Main, Add, Intern, School} from './components'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Router>
        <Route path="/" component={Main} exact />
        <Route path="/intern" component={Intern} />
        <Route path="/school" component={School} />
      </Router>
    </div>
  );
}

export default App;
