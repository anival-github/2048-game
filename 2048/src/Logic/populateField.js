/* eslint-disable consistent-return */
import { createCell } from './startGame';

const populateField = (cells) => {
  const occupiedCoords = new Set();

  cells.forEach((cell) => {
    occupiedCoords.add(cell.x * 4 + cell.y);
  });

  if (occupiedCoords.size === 16) return;

  let x;
  let y;

  const startSize = occupiedCoords.size;

  do {
    x = Math.floor(Math.random() * 3.9);
    y = Math.floor(Math.random() * 3.9);

    const sum = x * 4 + y;
    occupiedCoords.add(sum);
  } while (startSize === occupiedCoords.size);

  return [...cells, createCell(y, x, 2)];
};

export default populateField;
