import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Main from './Components/Main';

import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <hr/>
    <Main/>
    </div>
    </Provider>
    );
  }

  export default App;
