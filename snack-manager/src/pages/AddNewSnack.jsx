import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

export default function AddNewSnack() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newSnack = { title, price, description, imageFile };
    
    try {
        const response = await fetch(`http://localhost:8080/disneySnacks/snacks`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSnack),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! ${response.status}`);
            }
            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            setMessage(error.message);
        } 
        return response.json();
        }   
      
return (
    <div>
      <h1>Add New Snack</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
         <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        ></textarea>
          <input
          type="file"
          placeholder="image"
          onChange={(e) => setImageFile(event.target.files[0])}
          required
        />
         <button type="submit">Add Snack</button>
         </form>
    </div>
    );
}     