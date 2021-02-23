/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import BestScores from './BestScores';

const BestScoresContainer = ({ bestScores }) => {
  const uniqId = (() => {
    let num = 0;
    return () => {
      num += 1;
      return num;
    };
  })();

  const renderScores = (points) => (
    <span key={uniqId()}>
      {` ${points} `}
    </span>
  );

  return (
    <BestScores>
      <span>Best: </span>
      {bestScores.length > 0 && bestScores.map(renderScores)}
    </BestScores>
  );
};

const mapStateToProps = (state) => ({
  bestScores: state.field.bestScores,
});

export default connect(mapStateToProps, {})(BestScoresContainer);
