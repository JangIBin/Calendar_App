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

function App() {
  return (
    <div className="App">
        
        <Sidebar />
        <Header />
        <Main />

    </div>
  );
}

export default App;
