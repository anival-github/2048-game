/* eslint-disable no-undef */
import { createCell } from '../startGame';
import { moveCells, directions } from '../moveCells';

const finalPositions = {
  [directions.UP]: {
    y: 0, x: 1, value: 2, id: 'test',
  },
  [directions.DOWN]: {
    y: 3, x: 1, value: 2, id: 'test',
  },
  [directions.LEFT]: {
    y: 1, x: 0, value: 2, id: 'test',
  },
  [directions.RIGHT]: {
    y: 1, x: 3, value: 2, id: 'test',
  },
};

Object.keys(directions).forEach((direction) => {
  describe(`moving ${direction}`, () => {
    test('', () => {
      const initCells = [createCell(1, 1, 2, 'test')];

      expect(moveCells(initCells, direction))
        .toEqual([finalPositions[direction]]);
    });
  });
});
