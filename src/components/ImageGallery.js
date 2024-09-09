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
import './ImageGallery.css';

const ImageGallery = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [animationComplete, setAnimationComplete] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 5000);

        const textTimeout = setTimeout(() => {
            setShowText(true);
        }, 5800);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(animationTimeout);
            clearTimeout(textTimeout);
        };
    }, []);

    const calculateTransform = (depthFactor) => {
        if (!animationComplete) return '';
        const xMovement = (mousePos.x / window.innerWidth - 0.5) * depthFactor * 5;
        const yMovement = (mousePos.y / window.innerHeight - 0.5) * depthFactor * 5;
        return `translate(${xMovement}px, ${yMovement}px)`;
    };

    return (
        <div className="image-gallery">
            {/* First image without animation */}
            <img
                src={image1}
                alt="pic of 1"
                className="image image1"
                style={{
                    position: 'absolute',
                    top: '3%',
                    left: '-15%',
                    width: '155%',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 10,
                    animation: animationComplete ? 'none' : `moveDown${'Slow'} ${3.5 * 0.3}s ease-in-out forwards`,
                    transform: calculateTransform(1.5),
                    transition: 'transform 0.5s ease-out',
                }}
            />

            {/* Remaining images with parallax effect */}
            {[image2, image3, image4, image5, image6, image7, image8, image9, image10, image11].map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`pic of ${index + 2}`}
                    className={`image image${index + 2}`}
                    style={{
                        position: 'absolute',
                        top: '0%',
                        left: '0',
                        width: '120%',
                        height: '100vh',
                        objectFit: 'cover',
                        zIndex: 10 - (index + 1),
                        animation: animationComplete ? 'none' : `moveDown${index < 4 ? 'Fast' : 'Slow'} ${1.5 + index * 0.3}s ease-in-out forwards`,
                        transform: calculateTransform(index + 2),
                        transition: 'transform 0.5s ease-out',
                    }}
                />
            ))}

            {/* Welcome text that appears after the 4th image animation */}
            {showText && (
                <div
                    className="welcome-text"
                    style={{
                        position: 'absolute',
                        bottom: '70%',
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 6,
                        fontSize: '4rem',
                        fontFamily: 'Tommy Hilfiger',
                        color: '#ffffff',
                        animation: `moveUp 2s ease-in-out forwards`,
                        transform: calculateTransform(1.5),
                        transition: 'transform 0.5s ease-out',
                    }}
                >
                    Welcome to my portfolio
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
