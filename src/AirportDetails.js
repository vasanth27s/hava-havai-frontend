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
          <li><button><img src="home.png" alt="Home" /> Home</button></li>
          <li><button><img src="dashboard.png" alt="Dashboard" /> Dashboard</button></li>
          <li><button><img src="services.png" alt="Services" /> Services</button></li>
          <li><button><img src="airports.png" alt="Airports" /> Airports</button></li>
          <li><button><img src="videos.png" alt="Videos" /> Videos</button></li>
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
            <li><button className="active">Overview</button></li>
            <li><button>Runways</button></li>
            <li><button>Terminals</button></li>
            <li><button>Airlines</button></li>
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
