import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { faTrash, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

function RestaurantEdit({ restaurant, onSave, onDelete }) {
  const [editedRestaurant, setEditedRestaurant] = useState(restaurant);

  const handleChange = (e, field) => {
    const value = e.target.value;
    setEditedRestaurant(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: 'Confirm Save',
      text: "Are you sure you want to save changes?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, cancel!'
    });

    if (result.isConfirmed) {
      onSave(editedRestaurant);
      Swal.fire('Saved!', 'Your changes have been saved.', 'success');
    }
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Confirm Delete',
      text: "Are you sure you want to delete this restaurant?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    });

    if (result.isConfirmed) {
      onDelete(restaurant.id);
      Swal.fire('Deleted!', 'The restaurant has been deleted.', 'success');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-form-filles">
        <div className="form-filles">
          <label>Name:</label>
          <input type="text" value={editedRestaurant.name} onChange={(e) => handleChange(e, 'name')} />
        </div>
        <div className="form-filles">
          <label>City:</label>
          <input type="text" value={editedRestaurant.city} onChange={(e) => handleChange(e, 'city')} />
        </div>
        <div className="form-filles">
          <label>Price:</label>
          <input type="number" value={editedRestaurant.price} onChange={(e) => handleChange(e, 'price')} />
        </div>
        <div className="form-filles">
          <label>Kitchen type:</label>
          <input type="text" value={editedRestaurant.cuisine} onChange={(e) => handleChange(e, 'cuisine')} />
        </div>
        <div className="form-filles">
          <label>Main Image URL:</label>
          <input type="text" value={editedRestaurant.main_image} onChange={(e) => handleChange(e, 'main_image')} />
        </div>
        <div className="form-filles">
          <label>Image 1 URL:</label>
          <input type="text" value={editedRestaurant.images[0]} onChange={(e) => handleChange(e, 'images[0]')} />
        </div>
        <div className="form-filles">
          <label>Image 2 URL:</label>
          <input type="text" value={editedRestaurant.images[1]} onChange={(e) => handleChange(e, 'images[1]')} />
        </div>
        <div className="form-filles">
          <label>Image 3 URL:</label>
          <input type="text" value={editedRestaurant.images[2]} onChange={(e) => handleChange(e, 'images[2]')} />
        </div>
        <div className="form-filles">
          <label>Description:</label>
          <textarea value={editedRestaurant.description} onChange={(e) => handleChange(e, 'description')}></textarea>
        </div>
      </div>
      <div className="form-btns">
        <button type="submit">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
        <button type="button" onClick={handleDelete}>Delete <FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </form>
  );
}

export default RestaurantEdit;
