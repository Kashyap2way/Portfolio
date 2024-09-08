import React from 'react';

const WelcomeText = ({ showText }) => {
    return (
        showText && (
            <div
                style={{
                    position: 'absolute',
                    bottom: '70%',
                    width: '100%',
                    textAlign: 'center',
                    zIndex: 6,
                    fontSize: '4rem',
                    fontFamily: 'Tommy Hilfiger',
                    color: '#ffffff',
                    animation: 'moveUp 2s ease-in-out forwards',
                    transition: 'transform 0.1s ease-out',
                }}
            >
                Welcome to my portfolio
            </div>
        )
    );
};

export default WelcomeText;
