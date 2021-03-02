/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Score from './Score';
import Container from '../Common/Container';
import ScoreDescription from './ScoreDescription';
import BestScores from './BestScores';

const ScoresPanel = ({ bestScores, score }) => {
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
    <Container>
      <Score>
        <ScoreDescription>Score: </ScoreDescription>
        {score}
      </Score>
      <BestScores>
        <ScoreDescription>Best: </ScoreDescription>
        {bestScores.length > 0 && bestScores.map(renderScores)}
      </BestScores>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  bestScores: state.field.bestScores,
  score: state.field.score,
});

export default connect(mapStateToProps, {})(ScoresPanel);
