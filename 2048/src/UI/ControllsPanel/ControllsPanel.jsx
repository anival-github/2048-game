/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Score from './Score';
import {
  startNewGame, roundAll, changeFont, changeBackGround,
} from '../../redux/field-reducer';
import Container from './Container';

const ControllsPanel = (props) => (
  <Container>
    <Button onClick={props.startNewGame}>
      Start
    </Button>
    <Button onClick={props.roundAll}>
      Round
    </Button>
    <Button onClick={props.changeBackGround}>
      Background
    </Button>
    <Score>
      <span>Score: </span>
      {props.score}
    </Score>
    {/* <Button onClick={props.squareAll}>
      Square
    </Button> */}
    <Button onClick={props.changeFont}>
      Font
    </Button>
    <Button onClick={props.fullScreenHandle.enter}>
      Fullscreen
    </Button>
  </Container>
);

const mapStateToProps = (state) => ({
  score: state.field.score,
});

export default connect(mapStateToProps, {
  startNewGame, roundAll, changeFont, changeBackGround,
})(ControllsPanel);
