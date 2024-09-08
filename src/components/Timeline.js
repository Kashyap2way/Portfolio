import React, { useEffect, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Trigger scroll animation after scrolling down
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`timeline ${scrolled ? 'scrolled' : ''}`}>
      <div className="timeline-line"></div>
      <div className="timeline-item item1"></div>
      <div className="timeline-item item2"></div>
      <div className="timeline-item item3"></div>
      <div className="timeline-item item4"></div>
    </div>
  );
};

export default Timeline;
