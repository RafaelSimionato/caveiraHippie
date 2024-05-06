import React from 'react';
import './SubPlatformSelectionPage.css';

function SubPlatformSelectionPage() {
    return (
        <div className="sub-platform-selection-page">
            <h1>Choose a Sub-Platform</h1>
            <div className="sub-platform-buttons">
                <button className="sub-platform-button">NFT Creations</button>
                <button className="sub-platform-button">NFT Network</button>
                <button className="sub-platform-button">NFT Bazaar</button>
                <button className="sub-platform-button">HelpEachOther</button>
                <button className="sub-platform-button">Museu de Artes Digitais
                </button> 
            </div>
        </div>
    );
}

export default SubPlatformSelectionPage;
