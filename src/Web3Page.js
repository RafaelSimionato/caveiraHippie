import React from 'react';
import { Link } from 'react-router-dom';
import './Web3Page.css'; // Import CSS file for styling

const Web3Page = () => {
  return (
    <div className="web3-page">
      <div className="frame">
        <div className="content-container">
          <h1 className="web3-heading">Welcome to Web3</h1>
          <p className="web3-description">Welcome to Web3, the next frontier of the internet. In this decentralized ecosystem, individuals have unparalleled control over their digital lives. With enhanced security, transparency, and empowerment, Web3 promises to revolutionize how we interact online. From fairer economic systems to personalized data ownership, the possibilities are limitless. Join us in shaping a future where everyone has a stake in the digital world.</p>
          <div className="button-container">
            <Link to="/register" className="web3-button">Register</Link>
            <Link to="/login" className="web3-button">Login</Link>
          </div>
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-button" onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default Web3Page;
