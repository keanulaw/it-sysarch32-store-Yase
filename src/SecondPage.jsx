import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PEvNOEoCKfVp71pGchlLLSILQp5clDkfWmBfoh0mvVdoyBfGM6x6AWyd2EchcTruN343g3RrkhPe4MeyLCsyHPj00KmIPxHxC'); // Replace with your publishable key

const SecondPage = ({ selectedApparel, addToCart, cart }) => {
    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Send a request to the backend to create a checkout session
        const response = await fetch('http://34.27.8.251/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cart), // Send cart items to the backend
        });

        if (response.ok) {
            // If the request is successful, retrieve the session ID from the response
            const session = await response.json();

            // Redirect the user to the Stripe Checkout page using the session ID
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                // If there is an error during the redirect, display the error message
                console.error(result.error.message);
            }
        } else {
            // If there is an error creating the checkout session, display an error message
            console.error('Error creating checkout session');
        }
    };

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
                            <button onClick={() => addToCart(selectedApparel)}>Add to Cart</button>
                            {/* Add other details if needed */}
                        </div>
                    </div>
                </div>
            )}
            {!selectedApparel && <p>No item selected</p>}
            
            <h2>Items in Cart</h2>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty</p>
            )}

            {cart.length > 0 && (
                <button onClick={handleCheckout}>Checkout</button>
            )}
        </div>
    );
};

export default SecondPage;
