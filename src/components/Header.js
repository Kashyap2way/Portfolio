import React from 'react';
import { FaHome, FaCloud, FaRobot, FaEnvelope } from 'react-icons/fa'; // Import icons from React Icons
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/" className="icon-link">
              <FaHome className="icon" />
              <span className="icon-name">Home</span>
            </a>
          </li>
          <li>
            <a href="/cloud" className="icon-link">
              <FaCloud className="icon" />
              <span className="icon-name">Cloud Project</span>
            </a>
          </li>
          <li>
            <a href="/robotics" className="icon-link">
              <FaRobot className="icon" />
              <span className="icon-name">Robotics Project</span>
            </a>
          </li>
          <li>
            <a href="/connect" className="icon-link">
              <FaEnvelope className="icon" />
              <span className="icon-name">Connect</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;