// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



const Home = () => {
    return (
        <div className="home-container">
            
            <h1>Tools You Might Need</h1>
            <div className="button-grid">
                <Link to="/currency-converter" className="tool-button">Currency Converter</Link>
                <Link to="/length-converter" className="tool-button">Length Converter</Link>
                <Link to="/area-converter" className="tool-button">Area Converter</Link>
                <Link to="/volume-converter" className="tool-button">Volume Converter</Link>
                <Link to="/url-shortener" className="tool-button">URL Shortener</Link>
                <Link to="/bmi-calculator" className="tool-button">BMI Calculator</Link>
                <Link to="/tip-calculator" className="tool-button">Tip Calculator</Link>
                <Link to="/loan-calculator" className="tool-button">Loan Calculator</Link>
                <Link to="/password-generator" className="tool-button">Password Generator</Link>
                <Link to="/temperature-converter" className="tool-button">Temperature Converter</Link>
                <Link to="/weight-converter" className="tool-button">Weight Converter</Link>
                <Link to="/speed-converter" className="tool-button">Speed Converter</Link>
                <Link to="/date-difference-calculator" className="tool-button">Date Difference Calculator</Link>
                <Link to="/time-zone-converter" className="tool-button">Time Zone Converter</Link>
                <Link to="/hex-to-rgb-converter" className="tool-button">Hex to RGB Converter</Link>
                <Link to="/prime-number-checker" className="tool-button">Prime Number Checker</Link>
                <Link to="/roman-numeral-converter" className="tool-button">Roman Numeral Converter</Link>
                <Link to="/qr-code-generator" className="tool-button">QR Code Generator</Link>
            </div>
        </div>
    );
};

export default Home;