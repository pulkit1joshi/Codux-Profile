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
            <div>
              <a class="navbar-brand " href="/"><strong>Codux</strong></a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto work" data-toggle="collapse" data-target="#navbarNav">
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
            </div>


          </nav>
        </div>
        <div className="container" style={{ paddingBottom: "60px;" }}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="mt-5">Codux</h1>
              <p className="lead">Check your coding profile at <img
                src="https://sta.codeforces.com/s/70808/images/codeforces-logo-with-telegram.png" alt="Codeforces"
                style={{ width: "15%", height: "15%" }}></img>
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
