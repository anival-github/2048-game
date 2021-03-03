/* eslint-disable no-undef */
const DISABLE_MOVE_SOUNDS = '2048/sounds/DISABLE_MOVE_SOUNDS';
const ENABLE_MOVE_SOUNDS = '2048/sounds/ENABLE_MOVE_SOUNDS';
const CHANGE_SOUNDS_VOLUME = '2048/sounds/CHANGE_SOUNDS_VOLUME';
const CHANGE_MUSIC_VOLUME = '2048/sounds/CHANGE_MUSIC_VOLUME';
const SET_SOUNDS_SETTINGS = '2048/sounds/SET_SOUNDS_SETTINGS';

const initialState = {
  backgroundMusic: {
    isEnabled: true,
    volume: 1,
  },
  moveTileSounds: {
    isEnabled: true,
    volume: 1,
  },
};

export const soundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISABLE_MOVE_SOUNDS:
      return {
        ...state,
        backgroundMusic: { ...state.backgroundMusic },
        moveTileSounds: { ...state.moveTileSounds, isEnabled: false },
      };
    case ENABLE_MOVE_SOUNDS:
      return {
        ...state,
        backgroundMusic: { ...state.backgroundMusic },
        moveTileSounds: { ...state.moveTileSounds, isEnabled: true },
      };
    case CHANGE_SOUNDS_VOLUME:
      return {
        ...state,
        backgroundMusic: { ...state.backgroundMusic },
        moveTileSounds: { ...state.moveTileSounds, volume: action.volume },
      };
    case CHANGE_MUSIC_VOLUME:
      return {
        ...state,
        backgroundMusic: { ...state.backgroundMusic, volume: action.volume },
        moveTileSounds: { ...state.moveTileSounds },
      };
    case SET_SOUNDS_SETTINGS:
      return {
        ...state,
        ...action.sounds,
      };
    default:
      return state;
  }
};

export const disableMoveSounds = () => ({
  type: DISABLE_MOVE_SOUNDS,
});

export const enableMoveSounds = () => ({
  type: ENABLE_MOVE_SOUNDS,
});

export const changeSoundsVolume = (volume) => ({
  type: CHANGE_SOUNDS_VOLUME,
  volume,
});

export const changeMusicVolume = (volume) => ({
  type: CHANGE_MUSIC_VOLUME,
  volume,
});

export const setSoundsSettings = (sounds) => ({
  type: SET_SOUNDS_SETTINGS,
  sounds,
});

export const initializeSoundsSettings = () => async (dispatch) => {
  const localStorageData = JSON.parse(localStorage.getItem('sounds'));

  if (localStorageData) {
    dispatch(setSoundsSettings(localStorageData));
  }
};
