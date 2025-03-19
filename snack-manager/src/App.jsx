import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8080/disneySnacks/snacks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong. Please try again later</p>;
  
    return (
      <div>
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
      </div>
    );
  }


  // return (
  //   <div className="App">
  //     <h1>Hello World!</h1>
  //   </div>
  // );


