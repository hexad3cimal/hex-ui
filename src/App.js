import React from 'react';
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <div className="side-bar">
                Sidebar
                <div className="sidebar-ul">
                    <div className="side-menu-item">
                        Home
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="container">
                    <div className="card">
                        <button className={"btn blue sm"}>button</button>
                        <button className={"btn red sm"}>button</button>
                     </div>
                    <div className={"input-group"}>
                        <label className={"lb"}> Test</label>
                        <input className="input blue" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
