import React from 'react';

/**
 * Square functional component
 * - takes props as input
 * - returns rendered button
 */
function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
