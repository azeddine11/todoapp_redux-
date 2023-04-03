// App.js

import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1>ToDo List</h1>
      <AddTask />
      <ListTask />
    </div>
    </>
  );
}

export default App;
