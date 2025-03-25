import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

export default function AddNewSnack({dispatch}) {
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [location, setLocation] = useState('');

   const clearForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setLocation('');
   };

   const postSnacks = (snacks) => {
    return fetch(`http://localhost:8080/disneySnacks/snacks`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(snacks)
    })
    .then(response => response.json())
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    const snacksData = {
        title,
        price,
        description,
        location,
    };

   postSnacks(snacksData).then((data) => {
        dispatch({type: 'ADD_SNACK', payload: data});
        clearForm();
        });
    };

   return (
    <form className='add-snacks' onSubmit={handleSubmit}>
        <div>
        <label>Title</label>
            <input 
            value={title} 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
        <label>Price</label>
            <input
            value={price}
            type='number'
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <div>
            <label>Description</label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div>
        <label>Location</label>
            <input 
            value={location} 
            type='text'
            onChange={(e) => setLocation(e.target.value)}
            />
        </div>
        <button type="submit">Add Snack</button>
    </form>
   )
}   