/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './App.css';
import useSound from 'use-sound';
import { connect } from 'react-redux';
import SettingsControls from './UI/SettingsControls/SettingsControls';
import FieldContainer from './UI/Field/FieldContainer';
import Footer from './UI/Footer/Footer';
import Info from './UI/Info/Info';
import Layout from './UI/Layout/Layout';
import tinkSound from './assets/sounds/tink-sound.wav';
import SoundsControlls from './UI/SoundControls/SoundsControlls';
import ScoresPanel from './UI/ScoresPanel/ScoresPanel';

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
    <Layout>
      <SoundsControlls />
      <SettingsControls fullScreenHandle={fullScreenHandle} />
      <ScoresPanel />
      <FullScreen handle={fullScreenHandle}>
        <FieldContainer moveTileSound={moveTileSound} />
      </FullScreen>
      <Info />
      <Footer />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  areSoundsEnabled: state.sounds.moveTileSounds.isEnabled,
  soundsVolume: state.sounds.moveTileSounds.volume,
});

export default connect(mapStateToProps, {})(App);
