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

export const createCell = (y, x, value, id) => ({
  y, x, value, id: id || uniqId(),
});
