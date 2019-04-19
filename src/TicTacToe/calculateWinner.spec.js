import calculateWinner from './calculateWinner.util.js';

describe('The calculateWinner function', () => {
  it('should allow the players to keep playing when there is not yet a winner', () => {
    const currentSquares = [null, null, null, null, 'O', 'O', null, null, null];

    expect(calculateWinner(currentSquares)).toBe(null);
  });

  const currentSquares = ['X', 'X', 'X', null, 'O', 'O', null, null, null];
  it("should return 'X' or 'O' when there is a winner", () => {
    expect(calculateWinner(currentSquares)).toBe('X');
  });
});
