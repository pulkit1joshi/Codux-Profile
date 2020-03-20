import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './Components/Posts';
import PostForm from './Components/Postform';

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    </a>
    </header>
    <PostForm />
    <hr/>
    <Posts/>

    </div>
    </Provider>
    );
  }

  export default App;
