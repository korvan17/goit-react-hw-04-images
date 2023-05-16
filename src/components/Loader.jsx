import React, { Component } from 'react';
import { ImSpinner } from 'react-icons/im';

export default class Loader extends Component {
  render() {
    return (
      <div>
        <div className="loader">
          <ImSpinner size="50" className="icon_spin" />
          Loading...
        </div>
      </div>
    );
  }
}
