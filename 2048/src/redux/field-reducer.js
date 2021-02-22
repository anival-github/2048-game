import { directions, moveCells } from '../Logic/moveCells';
import { getRandomCoord, createCell } from '../Logic/startGame';

const SET_INITIAL_CELLS = 'SET_INITIAL_CELLS';
const MOVE_PUZZLES = 'MOVE_PUZZLES';

const initialState = {
  cells: [],
};

const mapKeyToDirection = {
  ArrowUp: directions.UP,
  ArrowRight: directions.RIGHT,
  ArrowLeft: directions.LEFT,
  ArrowDown: directions.DOWN,
};

export const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_CELLS: {
      const firstCell = createCell(
        getRandomCoord(),
        getRandomCoord(),
        2,
      );
      const secondCell = createCell(
        getRandomCoord(),
        getRandomCoord(),
        2,
      );
      if (firstCell.x === secondCell.x && firstCell.y === secondCell.y) {
        firstCell.x = firstCell.x === 0 ? 1 : firstCell.x - 1;
      }
      return {
        ...state,
        cells: [firstCell, secondCell],
      };
    }
    case MOVE_PUZZLES:
      return {
        ...state,
        cells: moveCells(state.cells, mapKeyToDirection[action.key]),
      };
    default:
      return state;
  }
};

export const setInitialCells = () => ({
  type: SET_INITIAL_CELLS,
});

export const movePuzzles = (key) => ({
  type: MOVE_PUZZLES,
  key,
});
