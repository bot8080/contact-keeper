import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/contactState'

const App = () => {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <>
          <div className='container'>
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/about" Component={About} />
            </Routes>
          </div>
        </>
      </Router>
    </ContactState>
  );
}

export default App;
