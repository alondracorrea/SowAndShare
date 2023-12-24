import React, { useEffect, useRef } from 'react';
import './LeafMap.css';
import L from 'leaflet';

import customMarkerIcon from '../assets/plant.png';
import { db } from '../config/firebase'; // iimport firebase
import { collection, getDocs } from 'firebase/firestore';

const LeafMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = L.map(mapContainer.current).setView([37.0902, -95.7129], 4); // default view

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // for the custom icon (leaf)
      const customIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

            // a dictionary to map state names to coordinates
            const stateCoordinates = {
                Alabama: [32.806671, -86.791130],
                Alaska: [65.5888, -154.4931],
                Arizona: [34.0489, -111.0937],
                Arkansas: [35.2010, -92.1999],
                California: [36.7783, -119.4180],
                Colorado: [39.1130, -105.3589],
                Connecticut: [41.5999, -72.6999],
                Delaware: [39, -75.5],
                Florida: [27.9944, -81.7603],
                Georgia: [33.2478, -83.4412],
                Hawaii: [19.7418, -155.8444],
                Idaho: [44.0682, -114.7420],
                Illinois: [40, -89],
                Indiana: [40.2735, -86.1270],
                Iowa: [42.0330, -93.5815],
                Kansas: [38.5, -98],
                Kentucky: [37.8393, -84.27],
                Louisiana: [30.3918, -92.3291],
                Maine: [45.3676, -68.9722],
                Maryland: [39.0458, -76.6413],
                Massachusetts: [42.4072, -71.3824],
                Michigan: [44.1822, -84.5068],
                Minnesota: [46.3924, -94.6362],
                Mississippi: [33, -90],
                Missouri: [38.5739, -92.6038],
                Montana: [46.9653, -109.5337],
                Nebraska: [41.5, -100],
                Nevada: [39.876, -117.2241],
                "New Hampshire": [44, -71.5],
                "New Jersey": [39.8339, -74.8718],
                "New Mexico": [34.3071, -106.018],
                "New York": [43, -75],
                "North Carolina": [35.7822, -80.7935],
                "North Dakota": [47.6501, -100.437012],
                Ohio: [40.3675, -82.9962],
                Oklahoma: [36.0846, -96.9214],
                Oregon: [44, -120.5],
                Pennsylvania: [41.2033, -77.1945],
                "Rhode Island": [41.7423, -71.7423],
                "South Carolina": [33.8361, -81.1637],
                "South Dakota": [44.5, -100],
                Tennessee: [35.8601, -86.6602],
                Texas: [31, -100],
                Utah: [39.4192, -111.9507],
                Vermont: [44, -72.699997],
                Virginia: [37.9269, -78.0249],
                Washington: [47.7511, -120.7401],
                "West Virginia": [39, -80.5],
                Wisconsin: [44.5, -89.5],
                Wyoming: [43.07597, -107.2903],
              };

      // fetch survey responses from Firebase
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'survey'));
        const stateCounts = {}; // create a dictionary to store counts by state

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const state = data.answers[0]; 
          
          if (!stateCounts[state]) {
            stateCounts[state] = 1; // initialize the count to 1 for a new state
          } else {
            stateCounts[state]++; // increment
          }

          /*iterate through answers and increment the count
          for (let i = 1; i < data.answers.length; i++) {
            stateCounts[state]++;
          }*/

        });

        // add markers to the map based on stateCoordinates
        for (const state in stateCounts) {
          const count = stateCounts[state];
          const coordinates = stateCoordinates[state];

          if (coordinates) {
            const [latitude, longitude] = coordinates;
            const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
           marker.bindPopup(`State: ${state}<br>Counts: ${count}`, { className: 'marker-popup' });
          }
        }
      };

      fetchData();
    }
  }, []);

  return (
    <div className="leaf-div">
      <div className='leaf-map' ref={mapContainer}></div>
    </div>
  );
};

export default LeafMap;
