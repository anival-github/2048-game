const addBestScore = (bestScores, lastScore) => {
  if (lastScore === 0) {
    return bestScores;
  }

  if (bestScores.length >= 10 && bestScores.find((score) => score < lastScore)) {
    const newArr = [...bestScores, lastScore].sort((a, b) => b - a);
    newArr.splice(-1, 1);
    return newArr;
  }

  return [...bestScores, lastScore].sort((a, b) => b - a);
};

export default addBestScore;
