import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [inputs, setInputs] = useState({ email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();

    const handleChange =  (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setInputs(values => ({...values, [name]: value}))
    };

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (inputs.password !== inputs.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
    
            try {
                const response = await fetch(`http://localhost:8080/auth/signUp`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: inputs.email, password: inputs.password }),
            });
        
            if (response.ok) {
                alert("Account created successfully");
                navigate("/signIn");
            } else {
                alert("Something went wrong, please try again.");
            }
        } catch (error) {
                console.error("Error:", error);
                alert("Network error. Please try again.");
            }    
    };

      return (
        <div className="SignUp">
            <div className="form">
            <h2>Sign Up</h2>
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

            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
                <button type="submit" className="signUp_button">Signup</button>
            </form>
            </div>
        </div>  
      );      
}