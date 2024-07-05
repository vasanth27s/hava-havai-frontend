import React, { useState } from 'react';
import './AddEditAirport.css';

const AddEditAirport = ({ airport, onSave, onCancel }) => {
  const [name, setName] = useState(airport ? airport.name : '');
  const [country, setCountry] = useState(airport ? airport.country : '');
  const [code, setCode] = useState(airport ? airport.code : '');
  const [terminals, setTerminals] = useState(airport ? airport.terminals : '');
  const [image, setImage] = useState(null);

  const handleSave = () => {
    // Prepare airport object with updated values
    const updatedAirport = {
      ...airport,
      name,
      country,
      code,
      terminals,
      image // Add image when implemented
    };

    onSave(updatedAirport);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle image upload logic (store in state, display preview, etc.)
    setImage(file);
  };

  const openFileDialog = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="add-edit-airport">
      <h1>{airport ? 'Edit Airport' : 'Add New Airport'}</h1>
      <div className="form-group">
        <label htmlFor="name">Terminal Title</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Description</label>
        <textarea
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="terminals">Terminal</label>
        <input
          type="text"
          id="terminals"
          value={terminals}
          onChange={(e) => setTerminals(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image Upload</label>
        <div>
          <input
            type="file"
            id="fileInput"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <button className="upload-button" onClick={openFileDialog}>
            Upload Image
          </button>
        </div>
        {image && (
          <img src={URL.createObjectURL(image)} alt="Uploaded preview" className="preview-image" />
        )}
      </div>
      <div className="button-group">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddEditAirport;
