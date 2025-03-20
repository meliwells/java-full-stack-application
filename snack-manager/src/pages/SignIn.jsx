
import { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   return (
    <div className="SignIn">
      {/* <Header />
        <div className="form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <Link to="/snackList" className="login_button">Sign In</Link>
      </form>
    </div>       
      <Footer /> */}
    </div>
  );
}
