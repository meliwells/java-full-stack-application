import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function AdminSnackDetails() {
    const { snacksId } = useParams();
    const navigate = useNavigate();
    const [snack, setSnack] = useState({
        title: '',
        price: '',
        description: '',
        parkLocation:  '', 
        imagePath: '', 
    });
    
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`)
        .then(response => response.json())
        .then(data => setSnack(data))
        .catch(error => console.error('Error fetching snack details:', error));
    }, [snacksId])

    const handleChange = (event) => {
        setSnack({ ...snack, [event.target.name]: event.target.value });
    };

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
        fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(snack)
        })
        .then(response => {
            if (!response.ok) {
              throw new Error(`failed to update snack`);
            }
            return response.json();
          })
          .then(() => {
            alert('Snack updated successfully!')
            navigate('/AdminSnackList');
          })
          .catch(error => console.error('Error updating snack:', error));
    };


    const handleDelete = () => {
        fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete snack');
            }
            alert('Snack deleted successfully!');
            navigate('/AdminSnackList');
        })
        .catch(error => console.error('Error deleting snack:', error));
    };

    const handleCancel = () => {
        navigate('/AdminSnackList');
    };
    
    return (
        <div className="AdminSnackDetails">
            <h1>Update Snack</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={snack.title}
                        onChange={handleChange}
                        required
                    />    
                </label>

                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={snack.price}
                        onChange={handleChange}
                        required
                    />    
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={snack.description}
                        onChange={handleChange}
                    />    
                </label>

                <label>
                    Park Location:
                    <textarea
                        name="parkLocation"
                        value={snack.parkLocation}
                        onChange={handleChange}
                    />    
                </label>

                <label>
                    Upload Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />    
                </label>

                <button type="submit">Update Snack</button>
                <button type="button" onClick={handleDelete}>Delete</button>
                <button type="button" onClick={handleCancel}>Return to snack list</button>
            </form>
    </div>
      );
}  

//update
//delete
//cancel