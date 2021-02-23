export const getRandomCoord = () => (
  Math.floor(Math.random() * 3.9)
);

export const uniqId = (() => {
  let num = 0;
  return () => {
    num += 1;
    return num;
  };
})();

export const cellStates = {
  IDLE: 'IDLE',
  MOVING: 'MOVING',
  DYING: 'DYING',
  INCREASING: 'INCREASING',
};

export const createCell = (y, x, value, id) => ({
  y, x, value, id: id || uniqId(),
});

export const setInitialTiles = () => {
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

  return [firstCell, secondCell];
};
