import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <a href="sign_in.html" className="login_button">Login</a>
        <div className="homeImage">
          <img 
            src="images/disney.png" 
            alt="disneyWord"
          />
        </div>  
      <Footer />
    </div>
  );

  }


 


