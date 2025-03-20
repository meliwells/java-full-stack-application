import { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function SnackList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

useEffect(() => {
    fetch('http://localhost:8080/disneySnacks/snacks', 
      {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      
    .then(data => data.json())  

    .then(data => {
      console.log(data)
    })
 ;
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Please try again later</p>;

  return (
    <div className="SnackList">
      <Header />
      <h1>Snack List</h1>
      <ul>
        {data.map(snacks => (
          <li key={snacks.snacksId} className='snack-item'>
            <div>
            <strong>{snacks.title}</strong> - ${snacks.price} 
            </div>
            <p>{snacks.description}</p>
            <p>{snacks.location}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}  
