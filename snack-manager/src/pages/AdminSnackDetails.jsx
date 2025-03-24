import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

export default function AdminSnackDetails() {
    const [snack, setSnack] = useState(null);
    const { snacksId } = useParams();
    const [error, setError] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState(() => {
      return JSON.parse(localStorage.getItem("snackOptions")) || {};
    });

    const options = selectedOptions[snacksId] || {
      favorite: false,
      wantToTry: false,
      tried: false,
    };
    
useEffect(() => {
    fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`,
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
        setSnack(data);
      })
      .catch(error => {
        setError(error.message);
      });
    }, [snacksId]);

    if (!snack) return <p>No snack details available.</p>;
    console.log(snack.imagePath)
    
return (
    <div className="SnackDetails">
      <img src={`/images/${snack.imagePath}`} alt={snack.title} />
        <h1><strong>{snack.title}</strong> - ${snack.price} </h1>
        <p>{snack.description}</p>
        <p><em>Available at: {snack.parkLocation}</em></p>

        <Link to="/snackList" className="snackDetails-button">Return to snack list</Link>
    </div>
      );
}  

