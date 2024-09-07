import React from 'react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import image4 from '../Images/image4.png';
import image5 from '../Images/image5.png';
import image6 from '../Images/image6.png';
import image7 from '../Images/image7.png';
import image8 from '../Images/image8.png';
import image9 from '../Images/image9.png';
import image10 from '../Images/image10.png';
import image11 from '../Images/image11.png';

const ImageGallery = () => {
return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', marginTop: '50px' }}>
    {/* First image with the fastest speed and largest scale */}
    <img
        src={image1}
        alt="pic of 1"
        style={{
        position: 'absolute',
        top: '0%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 10, // Below the header (z20)
        animation: 'moveDownFast 1.5s ease-in-out forwards',
        transform: 'scale(1.4)',
        }}
    />

    {/* Second image with slightly slower speed and smaller scale */}
    <img
        src={image2}
        alt="pic of 2"
        style={{
        position: 'absolute',
        top: '-5%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 9,
        animation: 'moveDownSlow 2s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Third image */}
    <img
        src={image3}
        alt="pic of 3"
        style={{
        position: 'absolute',
        top: '-10%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 8,
        animation: 'moveDownSlower 2.3s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Fourth image */}
    <img
        src={image4}
        alt="pic of 4"
        style={{
        position: 'absolute',
        top: '-15%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 7,
        animation: 'moveDownSlower 2.8s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Middle text, delayed and sliding up */}
    <div
        style={{
        position: 'absolute',
        top: '100%', // Start from below the viewport
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 6,
        animation: 'slideUp 4s ease-in-out 1s forwards', // Delayed by 2 seconds
        fontSize: '3rem',
        fontFamily: 'Anton, sans-serif',
        color: '#ffffff',
        }}
    >
        Welcome to my Portfolio
    </div>

    {/* Fifth image */}
    <img
        src={image5}
        alt="pic of 5"
        style={{
        position: 'absolute',
        top: '-20%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 5, // Shifted down from 6
        animation: 'moveDownSlower 3.1s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Sixth image */}
    <img
        src={image6}
        alt="pic of 6"
        style={{
        position: 'absolute',
        top: '-25%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 4, // Shifted down from 5
        animation: 'moveDownSlower 3.3s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Seventh image */}
    <img
        src={image7}
        alt="pic of 7"
        style={{
        position: 'absolute',
        top: '-30%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 3, // Shifted down from 4
        animation: 'moveDownSlower 3.8s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Eighth image */}
    <img
        src={image8}
        alt="pic of 8"
        style={{
        position: 'absolute',
        top: '-35%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 2, // Shifted down from 3
        animation: 'moveDownSlower 4s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Ninth image */}
    <img
        src={image9}
        alt="pic of 9"
        style={{
        position: 'absolute',
        top: '-40%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 1, // Shifted down from 2
        animation: 'moveDownSlower 4.2s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Tenth image */}
    <img
        src={image10}
        alt="pic of 10"
        style={{
        position: 'absolute',
        top: '-45%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 0, // Shifted down from 1
        animation: 'moveDownSlower 4.4s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />

    {/* Eleventh image */}
    <img
        src={image11}
        alt="pic of 11"
        style={{
        position: 'absolute',
        top: '-50%',
        left: '0',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 0, // Kept at z0
        animation: 'moveDownSlowest 4.5s ease-in-out forwards',
        transform: 'scale(1)',
        }}
    />
    </div>
);
};

export default ImageGallery;