/* eslint-disable no-undef */
/* eslint-disable no-debugger */
/* eslint-disable no-use-before-define */
import { directions, moveTiles } from '../Logic/moveTiles';
import populateField from '../Logic/populateField';
import removeAndIncreaseCells from '../Logic/removeAndIncrease';
import { setInitialTiles } from '../Logic/startGame';
import addBestScore from '../Logic/addBestScore';

const START_NEW_GAME = '2048/field/START_NEW_GAME';
const MOVE_PUZZLES = '2048/field/MOVE_PUZZLES';
const ADD_TILE = '2048/field/ADD_TILE';
const MERGE_TILES_AND_ADD_POINTS = '2048/field/MERGE_TILES_AND_ADD_POINTS';
const CONTINUE_GAME = '2048/field/CONTINUE_GAME';
const ROUND_ALL = '2048/field/ROUND_ALL';
const CHANGE_FONT = '2048/field/CHANGE_FONT';
const CHANGE_BACKGROUND = '2048/field/CHANGE_BACKGROUND';

const initialState = {
  isGameWon: false,
  isGameEnded: false,
  cells: [],
  score: 0,
  bestScores: [],
  tilesCount: 16,
  musicEnabled: true,
  moveSoundsEnabled: true,
  roundAll: false,
  customFont: false,
  customTileBackground: false,
};

const mapKeyToDirection = {
  ArrowUp: directions.UP,
  ArrowRight: directions.RIGHT,
  ArrowLeft: directions.LEFT,
  ArrowDown: directions.DOWN,
};

export const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return {
        ...state,
        cells: setInitialTiles(),
        bestScores: addBestScore(state.bestScores, state.score),
        score: 0,
        isGameEnded: false,
        isGameWon: false,
      };
    case MOVE_PUZZLES:
      return {
        ...state,
        cells: moveTiles(state.cells, mapKeyToDirection[action.key]),
      };
    case ADD_TILE:
      return {
        ...state,
        ...populateField(state.cells),
      };
    case MERGE_TILES_AND_ADD_POINTS:
      return {
        ...state,
        ...removeAndIncreaseCells(state.cells, state.score),
      };
    case CONTINUE_GAME:
      return {
        ...state,
        ...action.state,
      };
    case ROUND_ALL:
      return {
        ...state,
        roundAll: !state.roundAll,
      };
    case CHANGE_FONT:
      return {
        ...state,
        customFont: !state.customFont,
      };
    case CHANGE_BACKGROUND:
      return {
        ...state,
        customTileBackground: !state.customTileBackground,
      };
    default:
      return state;
  }
};

export const startNewGame = () => (dispatch) => {
  clearInterval(timerId);
  dispatch(startNewGameSuccess());
};

export const startNewGameSuccess = () => ({
  type: START_NEW_GAME,
});

export const movePuzzles = (key) => ({
  type: MOVE_PUZZLES,
  key,
});

export const addTile = () => ({
  type: ADD_TILE,
});

export const mergeTilesAndAddPoints = () => ({
  type: MERGE_TILES_AND_ADD_POINTS,
});

export const makeMove = (key) => (dispatch) => {
  dispatch(movePuzzles(key));
  dispatch(addTile());
};

export const continueGame = (state) => ({
  type: CONTINUE_GAME,
  state,
});

export const initializeApp = () => (dispatch) => {
  dispatch(startNewGameSuccess());

  // const savedGameStatus = localStorage.getItem('field');
  // if (savedGameStatus) {
  //   dispatch(continueGame(JSON.parse(savedGameStatus)));
  // } else {
  //   dispatch(startNewGame());
  // }
};

export const roundAll = () => ({
  type: ROUND_ALL,
});

export const changeFont = () => ({
  type: CHANGE_FONT,
});

export const changeBackGround = () => ({
  type: CHANGE_BACKGROUND,
});

const autoPlayDirections = ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'];
let timerId;

export const autoPlay = (autoPlayIsWorking) => (dispatch) => {
  if (autoPlayIsWorking) {
    const autoPlayCallBack = () => {
      const index = Math.floor(Math.random() * 3.9);
      dispatch(makeMove(autoPlayDirections[index]));
    };

    timerId = setInterval(autoPlayCallBack, 500);
  }

  if (!autoPlayIsWorking) {
    clearInterval(timerId);
  }
};
