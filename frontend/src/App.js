import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import CurrencyConverter from './components/CurrencyConverter';
import Navigation from './components/Navigation';
import LengthConverter from './components/LenghtConverter';
import AreaConverter from './components/AreaConverter';
import VolumeConverter from './components/VolumeConverter';
import UrlShortener from './components/UrlShortener';
import BMICalculator from './components/BMICalculator';
import TipCalculator from './components/TipCalculator';
import LoanCalculator from './components/LoanCalculator';
import PasswordGenerator from './components/PasswordGenerator';
import TemperatureConverter from './components/TemperatureConverter';
import WeightConverter from './components/WeightConverter';
import SpeedConverter from './components/SpeedConverter';
import TimeZoneConverter from './components/TimeZoneConverter';
import DateDifferenceCalculator from './components/DateDifferenceCalculator';
import HexToRGBConverter from './components/HexToRGBConverter';
import PrimeNumberChecker from './components/PrimeNumberChecker';
import RomanNumeralConverter from './components/RomanNumeralConverter';
import Home from './components/Home';
import QRCodeGenerator from './components/QRCodeGenerator';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>} />
                    <Route path="/currency-converter" element={<CurrencyConverter />} />
                    <Route path="/length-converter" element={<LengthConverter />} />
                    <Route path="/area-converter" element={<AreaConverter />} />
                    <Route path="/volume-converter" element={<VolumeConverter/>} />
                    <Route path="/url-shortener" element={<UrlShortener />} />
                    <Route path="/bmi-calculator" element={<BMICalculator />} />
                    <Route path="/tip-calculator" element={<TipCalculator />} />
                    <Route path="/loan-calculator" element={<LoanCalculator />} />
                    <Route path="/password-generator" element={<PasswordGenerator />} />
                    <Route path="/temperature-converter" element={<TemperatureConverter />} />
                    <Route path="/weight-converter" element={<WeightConverter />} />
                    <Route path="/speed-converter" element={<SpeedConverter />} />
                    <Route path="/time-zone-converter" element={<TimeZoneConverter />} />
                    <Route path="/date-difference-calculator" element={<DateDifferenceCalculator />} />
                    <Route path="/hex-to-rgb-converter" element={<HexToRGBConverter />} />
                    <Route path="/prime-number-checker" element={<PrimeNumberChecker />} />
                    <Route path="/roman-numeral-converter" element={<RomanNumeralConverter />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/qr-code-generator" element={<QRCodeGenerator />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
