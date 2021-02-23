/* eslint-disable no-debugger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import useSound from 'use-sound';
import Button from './Button';
import {
  disableMoveSounds, enableMoveSounds, changeSoundsVolume, changeMusicVolume,
} from '../../redux/sounds-reducer';
import Container from './Container';
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

  const stopSoundsHandler = () => {
    props.disableMoveSounds();
  };

  const playSoundsHandler = () => {
    props.enableMoveSounds();
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
        Music on
      </Button>
      <label htmlFor="music-volume-control">
        music volume
        <input
          type="range"
          id="music-volume-control"
          onChange={musicVolumeChangeHandler}
          value={props.musicVolume * 100}
        />
      </label>
      <Button onClick={stopMusicHandler}>
        Music off
      </Button>
      <Button onClick={playSoundsHandler}>
        Sounds on
      </Button>
      <label htmlFor="sounds-volume-control">
        sounds volume
        <input
          type="range"
          id="sounds-volume-control"
          onChange={soundsVolumeChangeHandler}
          value={props.soundsVolume * 100}
        />
      </label>
      <Button onClick={stopSoundsHandler}>
        Sounds off
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isMusicEnabled: state.sounds.backgroundMusic.isEnabled,
  musicVolume: state.sounds.backgroundMusic.volume,
  soundsVolume: state.sounds.moveTileSounds.volume,
});

export default connect(mapStateToProps, {
  disableMoveSounds, enableMoveSounds, changeSoundsVolume, changeMusicVolume,
})(SoundsControlls);

// let volume = document.querySelector("#volume-control");
// volume.addEventListener("change", function(e) {
// audio.volume = e.currentTarget.value / 100;
// })
