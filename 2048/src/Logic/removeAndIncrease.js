/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { cellStates } from './startGame';

const removeAndIncreaseCells = (cells, score) => {
  let sum = score;

  const props = {
    cells: cells
      .filter((cell) => cell.state !== cellStates.DYING)
      .map((cell) => {
        if (cell.state === cellStates.INCREASING) {
          cell.value *= 2;
          sum += cell.value;
        }
        cell.state = cellStates.IDLE;
        return cell;
      }),
    score: sum,
  };

  return props;
};
export default removeAndIncreaseCells;
