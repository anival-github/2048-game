/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { cellStates } from './startGame';

export const directions = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const printMatrix = (matrix) => {
  let printString = '[\n';

  Array.from(new Array(4), (x, i) => i).forEach((colNum) => {
    printString += '  ';
    printString += Array.from(new Array(4), (x, i) => i)
      .map((rowNum) => JSON.stringify(matrix[colNum][rowNum]).padStart(40, ' '))
      .join(', ');
    printString += ',\n';
  });

  printString += ']';
  console.log(printString);
};

export const moveCells = (initCells, direction) => {
  const cells = initCells.slice();

  let matrix = createMatrix(4, 4);

  cells.forEach((cell) => {
    matrix[cell.y][cell.x] = cell;
  });

  printMatrix(matrix);

  matrix = rotateMatrixForward(matrix, direction);

  for (let y = 0; y <= 3; y += 1) {
    for (let x = 0; x <= 3; x += 1) {
      if (matrix[y][x] !== 0) {
        movePuzzle(matrix, y, x);
      }
    }
  }

  matrix = rotateMatrixBack(matrix, direction);

  for (let y = 0; y <= 3; y += 1) {
    for (let x = 0; x <= 3; x += 1) {
      if (matrix[y][x] !== 0) {
        matrix[y][x].y = y;
        matrix[y][x].x = x;
      }
    }
  }

  cells
    .filter((cell) => cell.by != null)
    .forEach((cell) => {
      cell.x = cell.by.x;
      cell.y = cell.by.y;
      delete cell.by;
    });

  printMatrix(matrix);

  return cells;
};

const rotateMatrixForward = (matrixToRotate, direction) => {
  switch (direction) {
    case directions.LEFT:
      return rotate(matrixToRotate);
    case directions.DOWN:
      return rotate(rotate(matrixToRotate));
    case directions.RIGHT:
      return rotate(rotate(rotate(matrixToRotate)));
    default:
      return matrixToRotate;
  }
};
const rotateMatrixBack = (matrixToRotate, direction) => {
  switch (direction) {
    case directions.LEFT:
      return rotate(rotate(rotate(matrixToRotate)));
    case directions.DOWN:
      return rotate(rotate(matrixToRotate));
    case directions.RIGHT:
      return rotate(matrixToRotate);
    default:
      return matrixToRotate;
  }
};

const movePuzzle = (matrix, y, x) => {
  let currentRow = y;
  let nextRow = y - 1;

  while (nextRow >= 0) {
    if (matrix[nextRow][x] === 0) {
      matrix[nextRow][x] = matrix[currentRow][x];
      matrix[currentRow][x].state = cellStates.MOVING;
      matrix[currentRow][x] = 0;
      currentRow = nextRow;
    } else if (
      matrix[nextRow][x].value === matrix[currentRow][x].value
      && (matrix[nextRow][x].state === cellStates.IDLE
        || matrix[nextRow][x].state === cellStates.MOVING)
    ) {
      matrix[nextRow][x].state = cellStates.DYING;
      matrix[nextRow][x].by = matrix[currentRow][x];

      matrix[currentRow][x].state = cellStates.INCREASING;
      matrix[nextRow][x] = matrix[currentRow][x];
      matrix[currentRow][x] = 0;
      currentRow = nextRow;
    } else {
      break;
    }
    nextRow -= 1;
  }
};

// https://coderoad.ru/39242313/как-создать-матрицу-массив-nxn-в-javascript
const rotate = (matrix) => matrix[0].map((val, index) => matrix.map((row) => row[index]).reverse());
const createLine = (amount) => new Array(amount).fill(0);
const createMatrix = (rows, cols) => createLine(cols).map(() => createLine(rows));
