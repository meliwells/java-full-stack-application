import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import { Link } from 'react-router-dom';

export default function App() {
   return (
    <div className="App">
      <Header />
        <div className="homeImage">
          <img 
            src="images/disney_mainstreet.jpg" 
            alt="mainstreet"
          />
        </div>  
        <Link to="/signIn" className="login_button">Login</Link>
        <div className="disneyImage">
          <img 
            src="images/disney.png" 
            alt="disneyWord"
          />
        </div>  
      <Footer />
    </div>
  );

  }


 


