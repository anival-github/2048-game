/* eslint-disable no-undef */
import { createCell, cellStates } from '../startGame';
import { moveCells, directions } from '../moveCells';

const finalPositions = {
  [directions.UP]: {
    y: 0, x: 1, value: 2, id: 'test', state: cellStates.MOVING,
  },
  [directions.DOWN]: {
    y: 3, x: 1, value: 2, id: 'test', state: cellStates.MOVING,
  },
  [directions.LEFT]: {
    y: 1, x: 0, value: 2, id: 'test', state: cellStates.MOVING,
  },
  [directions.RIGHT]: {
    y: 1, x: 3, value: 2, id: 'test', state: cellStates.MOVING,
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

describe('INCREASING', () => {
  test('2 cells', () => {
    const initCells = [createCell(0, 0, 2, 't1'), createCell(0, 1, 2, 't2')];
    expect(moveCells(initCells, directions.LEFT)).toEqual([
      {
        y: 0, x: 0, value: 2, id: 't1', state: cellStates.DYING,
      },
      {
        y: 0, x: 0, value: 2, id: 't2', state: cellStates.INCREASING,
      },
    ]);
  });
});
