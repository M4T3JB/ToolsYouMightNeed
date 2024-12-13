// UrlShortener.js
import React, { useState } from 'react';
import axios from 'axios';
import './Common.css';

const UrlShortener = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const shortenUrl = async () => {
        try {
            const response = await axios.get(`https://tinyurl.com/api-create.php?url=${inputUrl}`);
            setShortUrl(response.data);
        } catch (error) {
            console.error('Error shortening the URL', error);
            setShortUrl('Error shortening the URL');
        }
    };

    return (
        <div className="tool-container">
            <h1>URL Shortener</h1>
            <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Enter URL to shorten"
            />
            <button onClick={shortenUrl}>Shorten URL</button>
            {shortUrl && (
                <div className="result">
                    Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </div>
            )}
        </div>
    );
};

export default UrlShortener;