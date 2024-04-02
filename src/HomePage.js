import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false); // State to manage button visibility

  const presentationText = `
    In the early days of the internet, known as Web1, the digital landscape was simple yet revolutionary. Websites were static, mostly consisting of text and images. Users accessed information but had limited interaction. It was a time of exploration and discovery, laying the groundwork for what was to begin...\n
    Then came Web2, ushering in an era of dynamic, interactive online experiences. Social media, e-commerce, and streaming platforms have become ubiquitous. While Web2 brought unprecedented connectivity and convenience, it also came with its drawbacks. Users traded their personal data for access to these services, often without fully understanding the consequences. The centralized nature of Web2 meant that corporations controlled the flow of information, leading to issues of privacy infringement and data exploitation. Despite its advancements, Web2 left many feeling disempowered and vulnerable in the digital realm.\n
    Enter Web3, a paradigm shift towards decentralization and empowerment. Here, the focus is on putting control back into the hands of the individual. Through blockchain technology and smart contracts, Web3 offers a transparent, secure, and equitable digital environment. Every transaction is recorded on a public ledger, ensuring accountability and trust. With no need for intermediaries, users can engage in peer-to-peer interactions, bypassing traditional gatekeepers. This new model not only enhances security and transparency but also fosters a sense of community ownership. In the Web3 ecosystem, users are not just consumers but active participants in a thriving digital economy.\n
    Non-Fungible Tokens (NFTs) enable individuals to tokenize their creativity and digital assets, creating new avenues for monetization and expression. Imagine being fairly rewarded for your attention and engagement, reclaiming the value of your data and digital footprint. Web3 promises a future where innovation, inclusivity, and empowerment are the norm. Our journey with Web3 is just beginning, but the possibilities are limitless. Together, let's embrace this transformative shift and shape a future where everyone has a stake. \n
    Welcome to Web3, where you're not just a user but a co-creator of the digital world.
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < presentationText.length) {
        if (presentationText[index] === '\n') {
          setDisplayText(prevText => prevText + '</p><p>');
        } else {
          setDisplayText(prevText => prevText + presentationText[index]);
        }
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
        setShowButton(true); // Set showButton to true when text presentation is complete
      }
    }, 50);

    return () => clearInterval(interval);
  }, [index, presentationText]);

  const handleEnterWeb3 = () => {
    window.location.href = '/web3'; // Redirect to the /web3 route defined in App.js
  };

  return (
    <div className="homepage-container">
      <div className="book-background">
        <div className="book-page">
          <div className="presentation-text" dangerouslySetInnerHTML={{ __html: `<p>${displayText}</p>` }} />
          {showButton && (
            <div>
              <button className="web3-button" onClick={handleEnterWeb3}>Enter Web3</button>
              <button className="back-button" onClick={() => window.history.back()}>Back</button>
            </div>
          )}
          {/* Render button when showButton is true */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
