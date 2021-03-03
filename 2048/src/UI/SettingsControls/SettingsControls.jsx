/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button from '../Common/Button';
import FullScreenButton from './FullScreenButton';
import {
  startNewGame, roundAll, changeFont, changeBackGround, autoPlay,
} from '../../redux/field-reducer';
import Container from '../Common/Container';

const ControllsPanel = (props) => (
  <Container>
    <Button onClick={props.startNewGame}>
      Start
    </Button>
    <Button onClick={() => props.autoPlay(true)}>
      Auto
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
    <FullScreenButton onClick={props.fullScreenHandle.enter}>
      <span className="material-icons fs">fullscreen</span>
    </FullScreenButton>
  </Container>
);

export default connect(null, {
  startNewGame, roundAll, changeFont, changeBackGround, autoPlay,
})(ControllsPanel);
