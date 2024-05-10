// SecondPage.jsx

import React from 'react';

const SecondPage = ({ selectedApparel }) => {
    return (
        <div>
            <h1>Selected Apparel</h1>
            {selectedApparel && (
                <div className="selected-apparel-container">
                    <div className="selected-apparel-card">
                        <img src={selectedApparel.image} alt={selectedApparel.name} className="selected-apparel-image" />
                        <div className="selected-apparel-details">
                            <h2 className="selected-apparel-name">{selectedApparel.name}</h2>
                            <p className="selected-apparel-price">Price: ${selectedApparel.cost}</p>
                            {/* Add other details if needed */}
                        </div>
                    </div>
                </div>
            )}
            {!selectedApparel && <p>No item selected</p>}
        </div>
    );
};

export default SecondPage;
