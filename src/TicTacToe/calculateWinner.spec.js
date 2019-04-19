import calculateWinner from './calculateWinner.util.js';

describe('The calculateWinner function', () => {
  const currentSquares = ['X', 'X', 'X', null, 'O', 'O', null, null, null];
  it('returns a winner', () => {
    expect(calculateWinner(currentSquares)).toBe('X');
  });
});
