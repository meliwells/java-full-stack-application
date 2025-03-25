import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function AddNewSnack() {
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [parkLocation, setParkLocation] = useState('');
   const navigate = useNavigate();

   const clearForm = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setParkLocation('');
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
        title,
        price: Number(price),
        description,
        parkLocation,
    };
    
   postSnacks(snacksData).then((data) => {
    if (data) {
        alert('Snack added successfully!');
        clearForm();
        navigate('/AdminSnackList');
    }
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
        <label>Park Location</label>
            <input 
            value={parkLocation} 
            type='text'
            onChange={(e) => setParkLocation(e.target.value)}
            />
        </div>
        <button type="submit">Add Snack</button>
    </form>
   )
}   