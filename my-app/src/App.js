/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  };
  return (
    <>
      <Router>
        <Navbar title='TextUtiles2' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/about" element={<About/>} />
           
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
