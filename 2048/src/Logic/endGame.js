// /* eslint-disable no-debugger */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-param-reassign */
// import { cellStates } from './startGame';

// const removeAndIncreaseCells = (cells) => {
//   for (let y = 0; y <= 3; y += 1) {
//     for (let x = 0; x <= 3; x += 1) {
//       if (cells[y][x].value !== 0) {
//         cells[y][x].y = y;
//         cells[y][x].x = x;
//       }
//     }
//   }
//   let isGameWon;

//   const props = {
//     cells: cells
//       .filter((cell) => cell.state !== cellStates.DYING)
//       .map((cell) => {
//         if (cell.state === cellStates.INCREASING) {
//           cell.value *= 2;
//           sum += cell.value;
//         }
//         if (cell.value >= 2048) {
//           isGameWon = true;
//         }
//         cell.state = cellStates.IDLE;
//         return cell;
//       }),
//     score: sum,
//     isGameWon,
//   };

//   return props;
// };
// export default removeAndIncreaseCells;
