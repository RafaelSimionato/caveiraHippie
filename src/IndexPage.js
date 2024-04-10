import React, { useState, useEffect } from 'react';
import './IndexPage.css';

const IndexPage = () => {
  const [slogan, setSlogan] = useState('');
  const projectSlogan = 'Elevating Art, Empowering Creators';
  const [buttonColor, setButtonColor] = useState('#007bff');

  useEffect(() => {
    const interval = setInterval(() => {
      if (slogan.length < projectSlogan.length) {
        setSlogan((prevSlogan) => projectSlogan.slice(0, prevSlogan.length + 1));
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [slogan, projectSlogan]);

  const redirectToSubPlatformSelectionPage = () => {
    window.location.href = '/SubPlatformSelecionPage';
  };

  useEffect(() => {
    const colorInterval = setInterval(() => {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setButtonColor(randomColor);
    }, 1000); // Change color every second

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div className="index-page">
      <div className="centered">
        <h1 className="project-name">Caveira Hippie</h1>
        <h2 className="slogan">{slogan}</h2>
        <button
          className="start-button"
          onClick={redirectToSubPlatformSelectionPage}
          style={{ backgroundColor: buttonColor }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
