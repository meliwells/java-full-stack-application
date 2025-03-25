import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function AddNewSnack() {
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [locationId, setLocationId] = useState('');
   const navigate = useNavigate();

   const clearForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setLocationId('');
   };

   const postSnacks = (snacks) => {
    return fetch(`http://localhost:8080/disneySnacks/snacks`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(snacks)
    })
    .then(response => response.json())
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    const snacksData = {
        title: title,
        price: price,
        description: description,
        location: {locationId }
    }
    
   postSnacks(snacksData).then((data) => {
    if (data) {
        alert('Snack added successfully!');
        clearForm();
        navigate('/AdminSnackList');
    }
});
};

   return (
    <div>
    <div className="Admin">
        <h1>Administrator</h1>
      </div>
      <div className="add-snacks">
      <h2>Add A Snack</h2>
    <form onSubmit={handleSubmit}>
        
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
        <label>Park Location:</label>
        <select
            value={locationId} 
            onChange={(e) => setLocationId(e.target.value)}
            >
                <option value="">Select an option</option>
                <option value="1">Adventureland</option>
                <option value="2">Carts throughout the park</option>
                <option value="3">Critter Country</option>
                <option value="4">Fantasyland</option>
                <option value="5">Frontierland</option>
                <option value="6">Main Street</option>
                <option value="7">Mickey's Toontown</option>
                <option value="8">New Orleans Square</option>
                <option value="9">Tomorrowland</option>   
        </select>
        </div>
        <button type="submit">Add Snack</button>
    </form>
    </div>
    </div>
   )
}   