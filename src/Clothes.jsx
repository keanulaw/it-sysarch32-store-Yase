// Clothes.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase-config";
import './index.css'; // Import your CSS file

const Clothes = ({ navigateToSecondPage, addToCart }) => {
    const [apparels, setApparels] = useState([]);

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

    return (
        <div>
            <h1 className='apparel-h1'>Apparels Collection</h1>
            <div className="apparels-container" style={{ marginLeft: '10%' }}>
                {apparels.map(apparel => (
                    <div key={apparel.id} className="apparel-card-container">
                        <div onClick={() => navigateToSecondPage(apparel.id)} className="apparel-link">
                            <div className="apparel-card">
                                <img src={apparel.image} alt={apparel.name} className="apparel-image" />
                                <div className="apparel-details">
                                    <h2 className="apparel-name">{apparel.name}</h2>
                                    <p className="apparel-price">Price: ${apparel.cost}</p>
                                    <button onClick={() => addToCart(apparel)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clothes;
