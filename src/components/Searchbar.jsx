import React, { Component } from 'react';
import { StyledIcon } from './App/App.styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    request: null,
    inputValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const val = e.target.elements.searchInput.value;
    this.props.onSubmit(val);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="searchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="searchForm-button">
              <StyledIcon>Search</StyledIcon>
            </button>

            <input
              id="searchInput"
              className="searchForm-input"
              type="text"
              autoComplete="off"
              onChange={this.handleInputChange}
              autoFocus
              value={this.inputValue} // Привязываем значение поля ввода к состоянию
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
