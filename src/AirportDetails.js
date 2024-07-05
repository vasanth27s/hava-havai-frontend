import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAirportById } from './db';
import './AirportDetails.css';

const AirportDetails = () => {
  const { id } = useParams();
  const [airport, setAirport] = useState(null);

  useEffect(() => {
    const airportData = getAirportById(parseInt(id, 10));
    setAirport(airportData);
  }, [id]);

  if (!airport) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <h3>hava havai</h3>
        <ul>
          <li><a href="#"><img src="home.png" alt="Home" /> Home</a></li>
          <li><a href="#"><img src="dashboard.png" alt="Dashboard" /> Dashboard</a></li>
          <li><a href="#"><img src="services.png" alt="Services" /> Services</a></li>
          <li><a href="#"><img src="airports.png" alt="Airports" /> Airports</a></li>
          <li><a href="#"><img src="videos.png" alt="Videos" /> Videos</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>Airport Details</h1>
        <div className="airport-info">
          <h2>{airport.name}</h2>
          <p>Country: {airport.country}</p>
          <p>Code: {airport.code}</p>
          <p>Terminals: {airport.terminals}</p>
        </div>
        <div className="tabs">
          <ul>
            <li><a href="#" className="active">Overview</a></li>
            <li><a href="#">Runways</a></li>
            <li><a href="#">Terminals</a></li>
            <li><a href="#">Airlines</a></li>
          </ul>
        </div>
        <div className="tab-content">
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </div>
    </div>
  );
};

export default AirportDetails;
