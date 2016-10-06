import React, { Component, PropTypes } from 'react';
import 'milligram/dist/milligram.min.css'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
