/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Background, BackgroundCell, Field, Playground, PlayGroundCell,
} from './StyledComponents';
import { setInitialCells, movePuzzles } from '../../redux/field-reducer';

class FieldContainer extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.props.setInitialCells();
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'].includes(e.code)) {
      this.props.movePuzzles(e.code);
      console.log(e);
    }
  }

  render() {
    const backgroundCells = Array
      .from(new Array(16), (elem, index) => index)
      .map((elem) => <BackgroundCell key={elem} />);

    const playGroundCells = this.props.cells.map(({
      x, y, value, id,
    }) => (
      <PlayGroundCell key={id} x={x} y={y} value={value}>
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
});

export default connect(mapStateToProps, { setInitialCells, movePuzzles })(FieldContainer);
