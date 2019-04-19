import calculateWinner from './calculateWinner.util.js';

describe('The calculateWinner function', () => {
  describe('when there is not yet a winner', () => {
    const currentSquares = [null, null, null, null, 'O', 'O', null, null, null];
    it('should allow the players to keep playing', () => {
      expect(calculateWinner(currentSquares)).toBe(null);
    });
  });
  describe('when there is a winner', () => {
    const currentSquares = ['X', 'X', 'X', null, 'O', 'O', null, null, null];
    it("should return 'X' or 'O'", () => {
      expect(calculateWinner(currentSquares)).toBe('X');
    });
  });
});
