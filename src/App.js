import './App.css';
import './reset.css'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
            <p>G</p>
            <div className="name">GamJarin</div>
            <i className="fas fa-sort"></i>
        </div>

        <div className="sidebar-setting">
            <i className="fas fa-search"></i>
            <div className="setting-name">Quick Find</div>
        </div>
        <div className="sidebar-settings">
            <i className="far fa-clock"></i>
            <div className="setting-name">All Updates</div>
        </div>
        <div className="sidebar-settings">
            <i className="fas fa-cog"></i>
            <div className="setting-name">Settings & Members</div>
        </div>

        <div className="sidebar-addpage">
            <div className="todolist">
                <i className="fas fa-caret-right"></i>
                <img src="./image/day.jpg" />
                <div className="addpage-name">To Do List</div>
            </div>
        </div>
        <div className="sidebar-todolist">
            <p>+</p>
            <div className="addpage-name">Add a page</div>
        </div>

        <div className="sidebar-service">
            <div className="templates">
                <i className="fas fa-mail-bulk"></i>
                <div className="service-name">Templates</div>
            </div>
            <div className="templates">
                <i className="fas fa-download"></i>
                <div className="service-name_2">Import</div>
            </div>
            <div className="templates">
                <i className="fas fa-trash"></i>
                <div className="service-name_3">Trash</div>
            </div>
        </div>
        {/* <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> */}
        <hr />
        <div className="sidebar-footer">
            <p>+</p>
            <div className="footer-name">New page</div>
        </div>
    </div>

    <div className="header">
        <div className="header-left">
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right"></i>
            <img src="./image/day.jpg" />
            <div className="header-name">To Do List</div>
        </div>

        <div className="header-right">
            <p>Share</p>
            <p>Updates</p>
            <p>Favorite</p>
            <i className="fas fa-ellipsis-h"></i>
        </div>
    </div>

    <div className="main">
        <div className="main-background-1"></div>
        <div className="main-background-2">
            <img src="./image/day.jpg" alt="" />
        </div>
    </div>
    </div>
  );
}

export default App;
