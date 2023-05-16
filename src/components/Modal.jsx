import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyPush);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPush);
  }

  keyPush = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
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
};
