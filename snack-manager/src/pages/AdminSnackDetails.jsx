import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';


export default function AdminSnackDetails({snacks, dispatch}) {
    const { snacksId } = useParams();
    const navigate = useNavigate();
   
    const [snack, setSnack] = useState({
        title: '',
        price: '',
        description: '',
        locationId: '',
        //imagePath: '',
    });


    //const [imageFile, setImageFile] = useState(null);




    useEffect(() => {
        const requestOptions = {

        }
        fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`)
            .then(response => response.json())
            .then(data => {
                setSnack({
                    title: data.title,
                    price: data.price,
                    description: data.description,
                    location_id: data.location?.location_id || '',
                    imagePath: data.imagePath
                });
            })
            .catch(error => console.error('Error fetching snack details:', error));
    }, [snacksId]);


    const handleChange = (event) => {
        setSnack({ ...snack, [event.target.name]: event.target.value });
    };


    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedSnack = {
            title: snack.title,
            price: snack.price,
            description: snack.description,
            locationId: snack.locationId,
        };


        // if (imageFile) {
        //     formData.append('image', imageFile);
        // }


        try {
            const response = await fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSnack),
            });


            if (!response.ok) {
                throw new Error('Failed to update snack');
            }


            alert('Snack updated successfully!');
            navigate('/AdminSnackList');
        } catch (error) {
            console.error('Error updating snack:', error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const success = await deleteSnack(snacksId);
            if (success) {
                dispatch({ type: 'DELETE_TASK', payload: snacksId });
                alert('Snack deleted successfully!');
                navigate('/AdminSnackList');
            } else {
                alert('Failed to delete the snack.');
            }
        } catch (error) {
            console.error('Error deleting snack:', error);
        }
    };
    
    const deleteSnack = async (snacksId) => {
        try {
            const response = await fetch(`http://localhost:8080/disneySnacks/snacks/${snacksId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            return response.ok;
        } catch (error) {
            console.error('Error deleting snack:', error);
            return false;
        }
    };


    const handleCancel = () => {
        navigate('/AdminSnackList');
    };


    return (
        <div>
        <div className="Admin">
        <h1>Administrator</h1>
      </div>
        <div className="AdminSnackDetails">
            <h2>Update/ Delete a Snack</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    <select
                        name="location_id"
                        value={snack.locationId}
                        onChange={handleChange}
                        required
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
                </label>


                <label>
                    Upload Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />    
                </label>


                <div className="update-button">
                    <button type="submit" className="update-button">Update Snack</button>
                    <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Return to snack list</button>
                </div>
            </form>
        </div>
        </div>
    );
}



//update
//delete