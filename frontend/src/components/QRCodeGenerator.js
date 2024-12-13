// QRCodeGenerator.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './Common.css';

const QRCodeGenerator = () => {
    const [inputText, setInputText] = useState('');

    return (
        <div className="tool-container">
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text or URL"
            />
            <div className="qr-code">
                <QRCodeCanvas value={inputText} />
            </div>
        </div>
    );
};

export default QRCodeGenerator;