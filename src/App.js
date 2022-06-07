import React from 'react';

// router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS, Image
import './App.css';
import './reset.css';

// Components
import Header from "./components/header/Header";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Intern from './components/columns/intern/Intern';
import School from './components/columns/school/School';

// import {Sidebar, Header, Main, Add, Intern, School} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Router basename="/calendar_app">
        <Route path="/" component={Main} exact />
        <Route path="/intern" component={Intern} />
        <Route path="/school" component={School} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
