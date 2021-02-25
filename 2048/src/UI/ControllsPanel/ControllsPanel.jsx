/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button, { ButtonFullScreen } from './Button';
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
    <Button onClick={props.changeFont}>
      Font
    </Button>
    <ButtonFullScreen onClick={props.fullScreenHandle.enter}>
      <span className="material-icons fs">fullscreen</span>
    </ButtonFullScreen>
  </Container>
);

export default connect(null, {
  startNewGame, roundAll, changeFont, changeBackGround,
})(ControllsPanel);
