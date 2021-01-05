// router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS, Image
import './App.css';
import './reset.css';
import img from './img/day.jpg';

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

// Components
import Sidebar from "./components/Sidebar"; 
import Header from "./components/Header";
import Main from './components/Main';
import Add from './components/Add';
import Intern from './components/Intern';
import School from './components/School';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Router>
        <Route path="/" component={Main} exact />
        <Route path="/add" component={Add} />
        <Route path="/intern" component={Intern} />
        <Route path="/school" component={School} />
      </Router>

    </div>
  );
}

export default App;
