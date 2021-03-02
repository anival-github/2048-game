/* eslint-disable */
/* eslint-disable no-param-reassign */
/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayGroundCell from './PlayGround/PlayGroundCell';
import BackgroundCell from './BackGround/BacgroundCell';
import Field from './Field';
import Background from './BackGround/Background';
import Playground from './PlayGround/PlayGround';
import GameEndedField from './GameEndedField/GameEndedField';
import {
  startNewGame, makeMove, initializeApp, mergeTilesAndAddPoints, autoPlay,
} from '../../redux/field-reducer';
import GameEndedDescription from './GameEndedField/GameEndedDescription';

class FieldContainer extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
    this.props.initializeApp();
    document.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('unload', this.setLocalStorage);
  }

  componentDidUpdate(prevProps) {
    const { cells } = this.props;

    if (cells !== prevProps.cells) {
      document.querySelectorAll('.transition')
        .forEach((element) => {
          element.ontransitionend = this.onTransitionEnd;
        });
    }

    if (this.props.isGameEnded && this.props.isGameEnded !== prevProps.isGameEnded) {
      this.props.autoPlay(false)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('unload', this.setLocalStorage);
    document.querySelectorAll('.transition')
      .forEach((element) => {
        element.removeEventListener('transitionend', this.onTransitionEnd);
      });
  }

  handleKeyPress(e) {
    this.props.moveTileSound();
    if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'].includes(e.code) && !this.props.isGameEnded) {
      this.props.makeMove(e.code);
    }
    if (e.code === 'Escape') {
      this.props.startNewGame();
    }
  }

  onTransitionEnd() {
    this.props.mergeTilesAndAddPoints();
  }

  setLocalStorage() {
    localStorage.setItem('field', JSON.stringify(this.props.field));
  }

  render() {
    const backgroundCells = Array
      .from(new Array(this.props.tilesCount), (elem, index) => index)
      .map((elem) => <BackgroundCell roundAll={this.props.roundAll} key={elem} />);

    const playGroundCells = this.props.cells.map(({
      x, y, value, id,
    }) => (
      <PlayGroundCell
        className="transition"
        key={id}
        x={x}
        y={y}
        value={value}
        roundAll={this.props.roundAll}
        customFont={this.props.customFont}
        customTileBackground={this.props.customTileBackground}
      >
        {value}
      </PlayGroundCell>
    ));

    const { isGameEnded, isGameWon } = this.props;

    return (
      <Field>
        <Background>
          {backgroundCells}
        </Background>
        <Playground>
          {playGroundCells}
        </Playground>
        {
          isGameEnded && (
            <GameEndedField>
              <GameEndedDescription>
                {isGameWon ? 'You win!' : <div><p>You loose...</p><p>Try again!</p></div>}
              </GameEndedDescription>
            </GameEndedField>)
        }
      </Field>
    );
  }
}

const mapStateToProps = (state) => ({
  isGameWon: state.field.isGameWon,
  isGameEnded: state.field.isGameEnded,
  cells: state.field.cells,
  tilesCount: state.field.tilesCount,
  field: state.field,
  roundAll: state.field.roundAll,
  customFont: state.field.customFont,
  customTileBackground: state.field.customTileBackground,
});

export default connect(mapStateToProps, {
  startNewGame, makeMove, initializeApp, mergeTilesAndAddPoints, autoPlay,
})(FieldContainer);
