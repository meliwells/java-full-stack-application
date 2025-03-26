
import { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const [inputs, setInputs] = useState({ email: "", password: ""});
    const navigate = useNavigate();
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        });

        if (!response.ok) {
          alert("Invalid login credentials");
          return;
      }

      const data = await response.json();
        localStorage.setItem("userRole", data.role); 

        if (data.role === "ADMIN") {
            navigate("/adminSnackList");
        } else {
            navigate("/snackList");
        }
    } catch (error) {
        console.error("Login error:", error);
    }
};

    return (
      <div className="SignIn">
        <div className="form">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Enter Email:</label>
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />
            </div>
  
            <div>
              <label>Enter Password:</label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="signIn_button">Sign In</button>
          </form>
          <p>Don't have an account? <Link to="/signUp" className="signup_button">Sign up here.</Link></p>
        </div>
      </div>
    );
}
