import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageUrl, setProductImageUrl] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Create a new product object
        const newProduct = {
            name: productName,
            price: productPrice,
            image: productImageUrl,
        };

        try {
            // Send a POST request to add the product
            await axios.post('http://localhost:8080/products', newProduct);
            // Optionally, you can redirect or handle success in another way
            console.log('Product added successfully!');
            navigate('/shop');
        } catch (error) {
            console.error('Error adding product:', error);
        }

    };

    return (
        <div className='mainContainer'>
            <h1>Add Product</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Price:
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Image URL:
                    <input
                        type="text"
                        value={productImageUrl}
                        onChange={(e) => setProductImageUrl(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" className='Bttn'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;