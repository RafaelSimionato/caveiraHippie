import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './PresentationPage.css';

const PresentationPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [titlePosition, setTitlePosition] = useState({});
  const history = useHistory();

  const titles = [
    "Welcome to Caveira Hippie", // English
    "Welkom bij Caveira Hippie", // Dutch
    "Bienvenido a Caveira Hippie", // Spanish
    "Benvenuti a Caveira Hippie", // Italian
    "Bem-vindo(a) a Caveira Hippie", // Portuguese
    "欢迎来到 Caveira Hippie", // Chinese
    "Bienvenue chez Caveira Hippie", // French
    "Qapla'! jIH 'ej Caveira Hippie", // Klingon
    "Bonvenon al Caveira Hippie", // Esperanto
    "مرحبًا بك في Caveira Hippie", // Arabic
    "Добро пожаловать в Caveira Hippie", // Russian
    "Witaj w Caveira Hippie", // Polish
    "Willkommen bei Caveira Hippie", // German
    "Velkommen til Caveira Hippie" // Norwegian
  ];  

  const positions = [
    { top: '10%', left: '10%' },
    { top: '20%', left: '20%' },
    { top: '30%', left: '30%' },
    { top: '40%', left: '40%' },
    { top: '50%', left: '50%' },
    { top: '60%', left: '60%' },
    { top: '70%', left: '70%' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
      setTitlePosition(positions[Math.floor(Math.random() * positions.length)]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
      if (index === currentPage) {
        const paragraphs = page.querySelectorAll('p');
        paragraphs.forEach((paragraph) => {
          const text = paragraph.innerText.trim();
          paragraph.innerHTML = '';
          let index = 0;
          const intervalId = setInterval(() => {
            if (index < text.length) {
              paragraph.textContent += text[index];
              index++;
            } else {
              clearInterval(intervalId);
            }
          }, 33);
        });
      }
    });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage === titles.length - 1) {
      history.push('/Web3Page'); // Redirect to the Web3Page
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoToWeb3Page = () => {
    history.push('/Web3Page');
  };

  return (
    <div className="presentation-page">
      <div className="book-container">
        <div className={`page ${currentPage === 0 ? 'active' : ''}`}>
          <h1 style={titlePosition}>{titles[titleIndex]}</h1>
          <h2>Elevating Art, Empowering Creators </h2>
          <p>
            Caveira Hippie is more than just a platform; it's an interconnected ecosystem redefining the way we perceive and engage with digital art through Web3 technologies. Imagine a digital realm where every creation is a masterpiece, where your profile isn't just a social network facade, but a curated gallery of your digital legacy.
          </p>
        </div>
        <div className={`page ${currentPage === 1 ? 'active' : ''}`}>
          <p>
            At Caveira Hippie, your profile is your canvas, a personalized space where you showcase your creativity in its purest form. Whether it's captivating photos, mesmerizing videos, groundbreaking projects, or even legally binding contracts, each piece becomes a unique Non-Fungible Token (NFT) in your digital art collection.
          </p>
        </div>
        <div className={`page ${currentPage === 2 ? 'active' : ''}`}>
          <p>
            But that's just the beginning. With a digital wallet address and a secure unique PIN, you're not just a spectator—you're a player in the evolving landscape of digital ownership. Safeguard your NFTs, trade with others, or venture into the realm of fiat currency exchanges, all seamlessly integrated within our ecosystem.
          </p>
        </div>
        <div className={`page ${currentPage === 3 ? 'active' : ''}`}>
          <p>
            Our platform doesn't just stop at individual expression; it amplifies it. Dive into our marketplace, where transparency reigns supreme thanks to blockchain technology and smart contracts. Every transaction is a testament to the power of decentralized finance, empowering creators and collectors alike.
          </p>
        </div>
        <div className={`page ${currentPage === 4 ? 'active' : ''}`}>
          <p>
            And what's an art revolution without a museum to celebrate it? Welcome to our Digital Art Museum, where NFTs take center stage. From emerging talents to seasoned veterans, everyone has a chance to shine. Explore, engage, and evaluate with a simple click—like, dislike, or somewhere in between. Leave your mark with comments that spark conversations and connections.
          </p>
        </div>
        <div className={`page ${currentPage === 5 ? 'active' : ''}`}>
          <p>
            Caveira Hippie isn't just a platform; it's a movement. It's about elevating artistry to new heights and empowering creators to embrace their digital destiny. Join us and become part of a community where innovation knows no bounds, and creativity thrives in every pixel.
          </p>
          <h3>Welcome to Caveira Hippie - Elevating Art, Empowering Creators.</h3>
          <button className="end-presentation-button" onClick={handleGoToWeb3Page}>Explore Web3</button>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={handleNextPage} disabled={currentPage === 5}>Next</button>
      </div>
      <button className="back-button" onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default PresentationPage;
