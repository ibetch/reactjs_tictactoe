import React from 'react';

class Square extends React.Component {
  /** Initialize state to remember that the square got clicked */

  constructor(props) {
    /** Call super when defining the constructor of a subclass */
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
