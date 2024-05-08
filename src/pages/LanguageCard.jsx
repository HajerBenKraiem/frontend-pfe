import React from 'react';

const LanguageCard = () => {
  return (
    <div className="language-card">
      <div className="language-option">
        <img src="/images/french-flag.png" alt="French" />
        <span>Français</span>
      </div>
      <div className="language-option">
        <img src="/images/english-flag.png" alt="English" />
        <span>English</span>
      </div>
      <div className="language-option">
        <img src="/images/arabic-flag.png" alt="Arabic" />
        <span>العربية</span>
      </div>
    </div>
  );
};

export default LanguageCard;