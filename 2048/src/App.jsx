/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './App.css';
import useSound from 'use-sound';
import { connect } from 'react-redux';
import ControllsPanel from './UI/ControllsPanel/ControllsPanel';
import FieldContainer from './UI/Field/FieldContainer';
import Footer from './UI/Layout/Footer';
import Info from './UI/Layout/Info';
import Layout from './UI/Layout/Layout';
// import BestScoresContainer from './UI/ControllsPanel/BestScoresContainer';
import tinkSound from './assets/sounds/tink-sound.wav';
import SoundsControlls from './UI/ControllsPanel/SoundsControlls';
import ScoresPanel from './UI/ControllsPanel/ScoresPanel';

const App = (props) => {
  const fullScreenHandle = useFullScreenHandle();

  const [moveTileSound] = useSound(
    tinkSound,
    {
      volume: props.soundsVolume,
      soundEnabled: props.areSoundsEnabled,
      interrupt: true,
    },
  );

  return (
    <div className="App">
      <Layout>
        <SoundsControlls />
        <ControllsPanel fullScreenHandle={fullScreenHandle} />
        <ScoresPanel />
        <FullScreen handle={fullScreenHandle}>
          <FieldContainer moveTileSound={moveTileSound} />
        </FullScreen>
        <Info />
        <Footer />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  areSoundsEnabled: state.sounds.moveTileSounds.isEnabled,
  soundsVolume: state.sounds.moveTileSounds.volume,
});

export default connect(mapStateToProps, {})(App);
