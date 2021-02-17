const SET_INITIAL_CELLS = 'SET_INITIAL_CELLS';

const initialState = {
  cells: [],
};

const getRandomCoord = () => (
  Math.floor(Math.random() * 3.9)
);

const uniqId = (() => {
  let num = 0;
  return () => {
    num += 1;
    return num;
  };
})();

const createCell = (x, y, value) => ({
  x, y, value, id: uniqId(),
});

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
      return { cells: [firstCell, secondCell] };
    }
    default:
      return state;
  }
};

export const setInitialCells = () => ({
  type: SET_INITIAL_CELLS,
});
