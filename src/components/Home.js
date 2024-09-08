import React from 'react';
import ImageGallery from './ImageGallery';
import './Home.css'; // Ensure this file exists for styles

const Home = () => {
    return (
        <div className="home-container">
            <ImageGallery />
            {/* Other content/components for the Home page can go here */}
        </div>
    );
};

export default Home;
