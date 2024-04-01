import React from 'react';
import { Link } from 'react-router-dom';

const Web3Page = () => {
  return (
    <div className="web3-page">
      <h1>Welcome to Web3</h1>
      <p>This is a small introduction to Web3.</p>
      <div className="button-container">
        <Link to="/register" className="web3-button">Register</Link>
        <Link to="/login" className="web3-button">Login</Link>
      </div>
    </div>
  );
};

export default Web3Page;
