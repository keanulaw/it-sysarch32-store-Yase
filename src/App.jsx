// App.jsx

import React, { useState, useEffect } from 'react';
import './index.css';
import Clothes from './Clothes.jsx';
import Header from './Header.jsx';
import SecondPage from './SecondPage.jsx';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase-config";

function App() {
  const [page, setPage] = useState('clothes');
  const [selectedApparelId, setSelectedApparelId] = useState(null);
  const [apparels, setApparels] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchApparels = async () => {
      try {
        const apparelsCollection = collection(db, 'clothess');
        const snapshot = await getDocs(apparelsCollection);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setApparels(data);
      } catch (error) {
        console.error("Error fetching apparels: ", error);
      }
    };

    fetchApparels();
  }, []);

  const navigateToSecondPage = (id) => {
    setSelectedApparelId(id);
    setPage('secondPage');
  };

  const navigateToClothesPage = () => {
    setPage('clothes');
  };

  const addToCart = (apparel) => {
    setCart([...cart, apparel]);
  };

  // Find the selected apparel from apparels array based on selectedApparelId
  const selectedApparel = apparels.find(apparel => apparel.id === selectedApparelId);

  return (
    <>
      {page === 'secondPage' ? (
        <SecondPage selectedApparel={selectedApparel} />
      ) : (
        <>
          <Header cart={cart} />
          <Clothes navigateToSecondPage={navigateToSecondPage} addToCart={addToCart} />
        </>
      )}
    </>
  );
}

export default App;
