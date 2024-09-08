import React, { useEffect, useState } from 'react';
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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [animationComplete, setAnimationComplete] = useState(false);
    const [showText, setShowText] = useState(false); // State to control text animation

    useEffect(() => {
        // Listen for mouse movement to apply cursor-based parallax effect
        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Timeout to signal the completion of the initial animation
        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 5000); // 5 seconds for the initial animation

        // Timeout for showing the text after the 4th image animation
        const textTimeout = setTimeout(() => {
            setShowText(true);
        }, 5800); // Trigger text animation slightly after the 4th image animation

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(animationTimeout);
            clearTimeout(textTimeout);
        };
    }, []);

    const calculateTransform = (depthFactor) => {
        if (!animationComplete) return ''; // Disable transform until initial animation is done

        // Reduce the intensity of movement by reducing the multiplier
        const xMovement = (mousePos.x / window.innerWidth - 0.5) * depthFactor * 20;
        const yMovement = (mousePos.y / window.innerHeight - 0.5) * depthFactor * 20;
        return `translate(${xMovement}px, ${yMovement}px)`;
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* First image */}
            <img
                src={image1}
                alt="Image 1"
                style={{
                    position: 'absolute',
                    top: '3%',
                    left: '-15%',
                    width: '140%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 10,
                    animation: animationComplete ? 'none' : 'moveDownFast 1.5s ease-in-out forwards',
                    transform: calculateTransform(1), // Reduced movement
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Second image */}
            <img
                src={image2}
                alt="Image 2"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 9,
                    animation: animationComplete ? 'none' : 'moveDownSlow 2s ease-in-out forwards',
                    transform: calculateTransform(1.5),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Third image */}
            <img
                src={image3}
                alt="Image 3"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 8,
                    animation: animationComplete ? 'none' : 'moveDownSlower 2.3s ease-in-out forwards',
                    transform: calculateTransform(2),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Fourth image */}
            <img
                src={image4}
                alt="Image 4"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 7,
                    animation: animationComplete ? 'none' : 'moveDownSlower 2.8s ease-in-out forwards',
                    transform: calculateTransform(2.5),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Welcome text that appears after the 4th image animation */}
            {showText && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '70%',
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 6, // Behind image4
                        fontSize: '4rem',
                        fontFamily: 'Tommy Hilfiger', // Custom font
                        color: '#ffffff',
                        animation: 'moveUp 2s ease-in-out forwards',
                        transform: calculateTransform(1.5),
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    Welcome to my portfolio
                </div>
            )}

            {/* Continue with the other images following the same pattern */}

            <img
                src={image5}
                alt="Image 5"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 6,
                    animation: animationComplete ? 'none' : 'moveDownSlower 3.1s ease-in-out forwards',
                    transform: calculateTransform(3),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            <img
                src={image6}
                alt="Image 6"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 5,
                    animation: animationComplete ? 'none' : 'moveDownSlower 3.3s ease-in-out forwards',
                    transform: calculateTransform(3.5),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            <img
                src={image7}
                alt="Image 7"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 4,
                    animation: animationComplete ? 'none' : 'moveDownSlower 3.8s ease-in-out forwards',
                    transform: calculateTransform(4),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            <img
                src={image8}
                alt="Image 8"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 3,
                    animation: animationComplete ? 'none' : 'moveDownSlower 4s ease-in-out forwards',
                    transform: calculateTransform(4.5),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            <img
                src={image9}
                alt="Image 9"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 2,
                    animation: animationComplete ? 'none' : 'moveDownSlower 4.2s ease-in-out forwards',
                    transform: calculateTransform(5),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            <img
                src={image10}
                alt="Image 10"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 1,
                    animation: animationComplete ? 'none' : 'moveDownSlower 4.4s ease-in-out forwards',
                    transform: calculateTransform(5.5),
                    transition: 'transform 0.1s ease-out',
                }}
            />

            <img
                src={image11}
                alt="Image 11"
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 0,
                    animation: animationComplete ? 'none' : 'moveDownSlowest 4.5s ease-in-out forwards',
                    transform: calculateTransform(6), // Fastest movement for the last image
                    transition: 'transform 0.1s ease-out',
                }}
            />
        </div>
    );
};

export default ImageGallery;
