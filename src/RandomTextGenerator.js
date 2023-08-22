import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RandomTextGenerator.css';
const { faker } = require('@faker-js/faker');

function RandomTextGenerator() {
  const [wordCount, setWordCount] = useState(10);
  const [randomText, setRandomText] = useState('');
  const [copied, setCopied] = useState(false);

  const generateRandomText = () => {
    const wordCountNumber = Number(wordCount);
    const wordsString = faker.lorem.sentence(wordCountNumber);
    setRandomText(wordsString);
    setCopied(false); // Reset copied state when new text is generated
    setTimeout(() => {
      setCopied(true); // Set copied to true after a short delay
    }, 100); // Adjust the delay as needed
  };

  const handleWordCountChange = (event) => {
    setWordCount(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomText);
    setCopied(true); // Set copied to true after copying
  };

  return (
    <div className="random-text-generator container">
      <div className="logo">
        <span className="logo-text">
          Tex<span className="gradient-gen"><span className="lighter-text">-Free Text Generator</span></span>
        </span>
      </div>
      <div className="question">
        <h2>How many words do you want to generate?</h2>
      </div>
      <div className="input-group mt-3">
        <input
          type="number"
          className="form-control"
          value={wordCount}
          onChange={handleWordCountChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            onClick={generateRandomText}
          >
            Generate
          </button>
        </div>
      </div>
      <p className="generated-text mt-3">
        {randomText}
        <div
          className={`copy-icon ${copied ? 'visible' : ''}`}
          onClick={copyToClipboard}
        >
          <i className="fas fa-copy"></i>
        </div>
      </p>
    </div>
  );
}

export default RandomTextGenerator;
