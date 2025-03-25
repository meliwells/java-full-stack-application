import { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function AdminSnackList() {
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    return JSON.parse(localStorage.getItem("snackOptions")) || {};
  });

useEffect(() => {
    fetch(`http://localhost:8080/disneySnacks/snacks`, 
      {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
      }
      return response.json();
    })

    .then(data => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <div className="Admin">
        <h1>Administrator</h1>
      </div>
      <div className="SnackList">
        <h1>Snack List</h1>
        <h2>Click on a snack item to update datails</h2>
        <ul>
          {data.map(snacks => (
            <li key={snacks.snacksId} className='snack-item'>
              <Link to={`/AdminSnackDetails/${snacks.snacksId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
              <strong>{snacks.title}</strong>
              </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="logout-container">
        <Link to="/AddNewSnack" className="logout_button">Add New</Link>
        </div>
      </div>
    </div>
  );
}  
