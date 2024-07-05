// db.js

let data = {
    airports: [
      {
        id: 1,
        name: "Indra Gandhi International Airport",
        country: "India",
        code: "DEL",
        terminals: 3
      },
      {
        id: 2,
        name: "Dubai International Airport",
        country: "UAE",
        code: "DXB",
        terminals: 3
      },
      {
        id: 3,
        name: "Heathrow Airport",
        country: "England",
        code: "LHR",
        terminals: 4
      },
      {
        id: 4,
        name: "Istanbul Airport",
        country: "Turkey",
        code: "IST",
        terminals: 3
      },
      {
        id: 5,
        name: "Rajiv Gandhi International Airport",
        country: "India",
        code: "HYD",
        terminals: 2
      }
    ]
  };
  
  export function getAirports() {
    return data.airports;
  }
  
  export function getAirportById(id) {
    return data.airports.find(airport => airport.id === id);
  }
  
  export function addAirport(airport) {
    data.airports.push(airport);
  }
  
  export function updateAirport(id, updates) {
    const airport = data.airports.find(airport => airport.id === id);
    if (airport) {
      Object.assign(airport, updates);
    }
  }
  
  export function deleteAirport(id) {
    data.airports = data.airports.filter(airport => airport.id !== id);
  }