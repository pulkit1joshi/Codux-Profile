import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Main from './Components/Main';

import store from './store'
import { HashRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark scrolling-navbar ">
            <div class="container">
             <a class="navbar-brand " href="/"><strong>Codux</strong></a>
             </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={`/contests`} className="nav-link"> Contests </Link>
              </li>
              <li className="nav-item">
              <Link to={`/user`} className="nav-link"> Search </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/pulkit1joshi/Codux-Profile">Git</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
           

          </nav>
        </div>
        <div className="container" style={ {paddingBottom: "60px;"} }>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="mt-5">Codux</h1>
              <p className="lead">Check your coding profile at <img
                src="https://sta.codeforces.com/s/70808/images/codeforces-logo-with-telegram.png" alt="Codeforces"
                style={{ width:"15%" ,height:"15%" }}></img>
              </p>
              <div className="App">
                <hr />
                <Main />
              </div>
            </div>
          </div>
        </div>

       
      </HashRouter>
    </Provider>
  );
}

export default App;
