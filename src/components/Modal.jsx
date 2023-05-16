import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchmove', this.handleTouchMove);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchmove', this.handleTouchMove);
    document.body.style.overflow = '';
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    } else if (e.code === 'ArrowLeft') {
      this.props.onPrevious();
    } else if (e.code === 'ArrowRight') {
      this.props.onNext();
    }
  };

  handleTouchStart = e => {
    this.touchStartX = e.touches[0].clientX;
  };

  handleTouchMove = e => {
    if (!this.touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchEndX - this.touchStartX;

    if (touchDiff > 0) {
      this.props.onPrevious(); // Свайп вправо
    } else if (touchDiff < 0) {
      this.props.onNext(); // Свайп влево
    }

    this.touchStartX = null;
  };

  handClickleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, description } = this.props;
    return (
      <div className="overlay" onClick={this.handClickleBackdrop}>
        <div className="modal">
          <img src={largeImageURL} alt={description} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
