import '../App.css';
import { useEffect, useState } from "react";

function Map() {
  /*
  Displays a google map on the page

  Make a request to google maps using Crime's location
  Recieve map data with user's location showing
  */

  // Variables to store needed Locations
  const [ location ] = useState({});
  const [ crimeLocation ] = useState({});


  // // // // Get crime Location // // // // 
  // Sample crime location
  crimeLocation.lat = 37.230455;
  crimeLocation.long = -80.424294;

  // Make API Call to get Co-ordinates of crime
  
  
  // // // // Get User's Location // // // //
  // This asks user for location and gives it to a function called showPosition
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // This is to trigger getLocation everytime website is loaded
  useEffect(() => {
    getLocation()
  }, []);

  // Receives position information from getLocation function and assigns it to varbiables
  function showPosition(position) {
    location.lat = position.coords.latitude;
    location.long = position.coords.longitude;
  }


  // Distance between user and crime
  // Function to find distance
  function calcDistance(lat1,lat2, lon1, lon2) {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    // console.warn(c*r)
    return c * r;
    
  };

  let distance = calcDistance(location.lat, crimeLocation.lat, location.long, crimeLocation.long);

  // Render on website
  return (
    <div className='mapBackground' >
        <h1>Distance Between You and Location of Reported Crime</h1>


        { distance >= 16.0934 ?
        (
          console.log("Something")
        ):(
          console.log("Yay")
        )}

        <iframe
          className='map-container'
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_GOOGLE_API_KEY}&origin=${location.lat},${location.long}&destination=${crimeLocation.lat},${crimeLocation.long}&mode=walking`}>
        </iframe>

    </div>
  );
}

export default Map;