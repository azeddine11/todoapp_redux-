import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ListTask from './components/ListTask';
import store from './JS/store/store';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/list" element={<ListTask />} /> */}
        <Route exact path="/list" element={<><Navbar/><ListTask/></>}/>
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
