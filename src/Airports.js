import React, { useState } from 'react';
import './Airports.css';

const Airports = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);

  const airports = [
    { id: 1, name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
    { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
    { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
    { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
    { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
  ];

  // Function to handle showing the form for adding new airport
  const handleAddNew = () => {
    setShowAddForm(true);
    setSelectedAirport(null); // Reset selectedAirport state
  };

  // Function to handle showing the form for editing an airport
  const handleEdit = (airport) => {
    setSelectedAirport(airport);
    setShowAddForm(true);
  };

  // Function to handle deleting an airport (to be implemented)
  const handleDelete = (id) => {
    // Implement delete functionality here
    alert(`Delete airport with ID: ${id}`);
  };

  // Function to handle image upload (to be implemented)
  const handleImageUpload = () => {
    // Implement image upload functionality here
    alert('Image upload functionality to be implemented.');
  };

  // JSX for displaying airports and form
  return (
    <div className="container">
      <div className="sidebar">
        <h3>hava havai</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li>Services</li>
          <li><a href="#">Airports</a></li>
          <li><a href="#">Videos</a></li>
          <li>Others</li>
          <li><a href="#">List 1</a></li>
          <li><a href="#">List 2</a></li>
          <li><a href="#">List 3</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>Airports</h1>
        <div className="add-button" onClick={handleAddNew}>+ Add new</div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Airport</th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {airports.map(airport => (
              <tr key={airport.id}>
                <td><input type="checkbox" /></td>
                <td>{airport.name}</td>
                <td>{airport.country}</td>
                <td>{airport.code}</td>
                <td>{airport.terminals}</td>
                <td>
                  <span className="edit" onClick={() => handleEdit(airport)}>Edit</span>
                  <span className="delete" onClick={() => handleDelete(airport.id)}>Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Image upload card */}
        {showAddForm && (
          <div className="upload-card">
            <img src="placeholder.jpg" alt="Upload preview" />
            <div className="upload-actions">
              <button className="cancel">Cancel</button>
              <button className="continue" onClick={handleImageUpload}>Continue</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Airports;
