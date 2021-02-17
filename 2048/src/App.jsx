import React, { Component } from 'react';
import './App.css';
import FieldContainer from './UI/Field/FieldContainer';
import Layout from './UI/Layout/Layout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cells: [
        {
          id: 0, y: 0, x: 0, value: 2,
        },
        {
          id: 1, y: 0, x: 1, value: 4,
        },
      ],
    };
  }

  render() {
    const { cells } = this.state;
    return (
      <div className="App">
        <Layout>
          <FieldContainer cells={cells} />
        </Layout>
      </div>
    );
  }
}

export default App;
