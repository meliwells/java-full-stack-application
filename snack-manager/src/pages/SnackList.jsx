import { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function SnackList() {
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
    <div className="SnackList">
      <h1>Snack List</h1>
      <h2>Click on a snack item to view datails</h2>
      <ul>
        {data.map(snacks => (
          <li key={snacks.snacksId} className='snack-item'>
            <Link to={`/snackDetails/${snacks.snacksId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
            <strong>{snacks.title}</strong> - ${snacks.price} 
            </div>
            <div className="snack-preference">
              {selectedOptions[snacks.snacksId]?.wantToTry && <span>Want to try</span>}
              {selectedOptions[snacks.snacksId]?.tried && <span>Tried</span>}
              {selectedOptions[snacks.snacksId]?.favorite && <span>Favorite</span>}
            </div>
            <p>----------------------</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}  
