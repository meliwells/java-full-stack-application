import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

export default function SnackDetails() {
    const [snack, setSnack] = useState(null);
    const { snacksId } = useParams();
    const [error, setError] = useState(null);
    
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

return (
    <div className="SnackDetails">
        <h1><strong>{snack.title}</strong> - ${snack.price} </h1>
        <p>{snack.description}</p>
        <p>Available at: {snack.location}</p>
        <Link to="/snackList" className="snackList_button">Return to snack list</Link>
    </div>
      );
}  

