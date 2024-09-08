import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cloud from './components/Cloud';
import Robotics from './components/Robotics';
import Connect from './components/Connect';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cloud" element={<Cloud />} />
                    <Route path="/robotics" element={<Robotics />} />
                    <Route path="/connect" element={<Connect />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
