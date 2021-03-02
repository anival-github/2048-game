/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import useSound from 'use-sound';
import Button from '../Common/Button';
import {
  disableMoveSounds, enableMoveSounds, changeSoundsVolume, changeMusicVolume,
} from '../../redux/sounds-reducer';
import Container from '../Common/Container';
import backgroundMusic from '../../assets/sounds/background-music.mp3';

const SoundsControlls = (props) => {
  const [playBackgroundMusic, { sound: musicSound, stop: musicStop }] = useSound(
    backgroundMusic,
    {
      volume: props.musicVolume,
      soundEnabled: props.isMusicEnabled,
      interrupt: true,
    },
  );

  const playMusicHandler = () => {
    musicSound.loop(true);
    playBackgroundMusic();
  };

  const stopMusicHandler = () => {
    musicStop();
  };

  const soundsHandler = () => {
    if (props.areSoundsEnabled) {
      props.disableMoveSounds();
    } else {
      props.enableMoveSounds();
    }
  };

  const soundsVolumeChangeHandler = (e) => {
    props.changeSoundsVolume(e.currentTarget.value / 100);
  };

  const musicVolumeChangeHandler = (e) => {
    props.changeMusicVolume(e.currentTarget.value / 100);
  };

  return (
    <Container>
      <Button onClick={playMusicHandler}>
        <span className="material-icons">music_note</span>
      </Button>
      <label htmlFor="music-volume-control">
        <span className="volume_description">music volume</span>
        <input
          className="volume_range"
          type="range"
          id="music-volume-control"
          onChange={musicVolumeChangeHandler}
          value={props.musicVolume * 100}
        />
      </label>
      <Button onClick={stopMusicHandler}>
        <span className="material-icons">music_off</span>
      </Button>
      <label htmlFor="sounds-volume-control">
        <span className="volume_description">sounds volume</span>
        <input
          className="volume_range"
          type="range"
          id="sounds-volume-control"
          onChange={soundsVolumeChangeHandler}
          value={props.soundsVolume * 100}
        />
      </label>
      <Button onClick={soundsHandler}>
        {props.areSoundsEnabled && <span className="material-icons">volume_off</span>}
        {!props.areSoundsEnabled && <span className="material-icons">volume_up</span>}
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isMusicEnabled: state.sounds.backgroundMusic.isEnabled,
  areSoundsEnabled: state.sounds.moveTileSounds.isEnabled,
  musicVolume: state.sounds.backgroundMusic.volume,
  soundsVolume: state.sounds.moveTileSounds.volume,
});

export default connect(mapStateToProps, {
  disableMoveSounds, enableMoveSounds, changeSoundsVolume, changeMusicVolume,
})(SoundsControlls);
