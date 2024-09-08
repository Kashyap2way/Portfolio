import React from 'react';

const Image = ({ src, alt, zIndex, animation, depthFactor }) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                position: 'absolute',
                top: '0%',
                left: '0',
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                zIndex: zIndex,
                animation: animation,
                transform: calculateTransform(depthFactor),
                transition: 'transform 0.1s ease-out',
            }}
        />
    );
};

const calculateTransform = (depthFactor) => {
    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Default values
    const xMovement = (mousePos.x / window.innerWidth - 0.5) * depthFactor * 20;
    const yMovement = (mousePos.y / window.innerHeight - 0.5) * depthFactor * 20;
    return `translate(${xMovement}px, ${yMovement}px)`;
};

export default Image;
