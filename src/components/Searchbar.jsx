import React, { useState } from 'react';
import { StyledIcon } from './App/App.styled';
import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {
  
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e.target.elements.searchInput.value);
    setInputValue('');
  };

  return (
    <div>
      <header className="searchbar">
        <form className="searchForm" onSubmit={handleSubmit}>
          <button type="submit" className="searchForm-button">
            <StyledIcon>Search</StyledIcon>
          </button>

          <input
            id="searchInput"
            className="searchForm-input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            autoFocus
            value={inputValue} // Привязываем значение поля ввода к состоянию
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );

}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
