/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.css';
import ControllsPanel from './UI/ControllsPanel/ControllsPanel';
import FieldContainer from './UI/Field/FieldContainer';
import Layout from './UI/Layout/Layout';

const App = () => (
  <div className="App">
    <Layout>
      <ControllsPanel />
      <FieldContainer />
    </Layout>
  </div>
);

export default App;

// class App extends Component {
// constructor() {
// super();
// this.state = {
//   cells: [],
// };
// this.startGame = this.startGame.bind(this);
// this.getRandomCoordinate = this.getRandomCoordinate.bind(this);
// }

// componentDidMount() {
//   this.startGame();
// }

// getRandomCoordinate() {
//   return Math.floor(Math.random() * 3.9);
// }

// startGame() {
//   const firstTile = {
//     id: 0,
//     y: this.getRandomCoordinate(),
//     x: this.getRandomCoordinate(),
//     value: 2,
//   };

//   const secondTile = {
//     id: 1,
//     y: this.getRandomCoordinate(),
//     x: this.getRandomCoordinate(),
//     value: 2,
//   };

//   if (firstTile.x === secondTile.x && firstTile.y === secondTile.y) {
//     firstTile.x = firstTile.x === 0 ? 1 : firstTile.x - 1;
//   }

//   this.setState({ cells: [firstTile, secondTile] });
// }

//   render() {
//     const { cells } = this.state;
//     return (
//       <div className="App">
//         <Layout>
//           <FieldContainer cells={cells}
//            />
//         </Layout>
//       </div>
//     );
//   }
// }
