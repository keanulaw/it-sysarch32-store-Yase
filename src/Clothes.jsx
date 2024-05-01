// ClothingList.jsx

import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

const Clothes = () => {
    const [apparels, setApparels] = useState([]);

    useEffect(() => {
        const fetchApparels = async () => {
            try {
                const apparelsCollection = collection(db, 'apparels');
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
            <h1>Apparels Collection</h1>
            <div>
                {apparels.map(apparel => (
                    <div key={apparel.id}>
                        <img src={apparel.image} alt={apparel.name} />
                        <h2>{apparel.name}</h2>
                        <p>Price: ${apparel.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clothes;
