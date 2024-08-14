import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import '../style/SearchResult.css';

const videoLinks = {
  HG: 'https://www.youtube.com/watch?v=UepZXCmzTkE',
  RG: 'https://www.youtube.com/watch?v=Mu83IzE3uTo',
  MG: 'https://www.youtube.com/watch?v=AOIVcF6EdXI',
  PG: 'https://www.youtube.com/watch?v=1ElTFTRxVdE'
};

function SearchResult({ grade, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoLink = videoLinks[grade];

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    window.open(videoLink, '_blank');
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search-result">
      <p className="grade-text">{grade}</p>
      <a href={videoLink} onClick={handleLinkClick} className="video-link">Lihat Video Review Kit</a>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default SearchResult;
