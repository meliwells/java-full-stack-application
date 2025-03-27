
import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const [inputs, setInputs] = useState({ email: "", password: ""});
    const navigate = useNavigate();
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Logging In: ${inputs.email}`);

      navigate("/snackList");
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
