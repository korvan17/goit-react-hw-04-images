import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ largeImageURL, description, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handClickleBackdrop(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <div className="overlay" onClick={handClickleBackdrop}>
      <div className="modal">
        <img src={largeImageURL} alt={description} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  // onPrevious: PropTypes.func.isRequired,
  // onNext: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
