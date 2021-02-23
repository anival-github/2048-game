/* eslint-disable no-debugger */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayGroundCell from './PlayGroundCell';
import BackgroundCell from './BacgroundCell';
import Field from './Field';
import Background from './Background';
import Playground from './PlayGround';
import {
  startNewGame, makeMove, initializeApp,
} from '../../redux/field-reducer';

class FieldContainer extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  componentDidMount() {
    this.props.initializeApp();
    document.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('unload', this.setLocalStorage);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('unload', this.setLocalStorage);
  }

  handleKeyPress(e) {
    this.props.moveTileSound();
    if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'].includes(e.code)) {
      this.props.makeMove(e.code);
    }
    if (e.code === 'Escape') {
      this.props.startNewGame();
    }
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

    return (
      <Field>
        <Background>
          {backgroundCells}
        </Background>
        <Playground>
          {playGroundCells}
        </Playground>
      </Field>
    );
  }
}

const mapStateToProps = (state) => ({
  cells: state.field.cells,
  tilesCount: state.field.tilesCount,
  field: state.field,
  roundAll: state.field.roundAll,
  customFont: state.field.customFont,
  customTileBackground: state.field.customTileBackground,
});

export default connect(mapStateToProps, {
  startNewGame, makeMove, initializeApp,
})(FieldContainer);
