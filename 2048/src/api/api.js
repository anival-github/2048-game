import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://heroku-backend-2048.herokuapp.com/',
});

const gameStatusAPI = {
  getStatus() {
    return instance.get('gamestatus')
      .then((response) => response.data);
  },

  deleteOldStatus() {
    return instance.delete('gamestatus')
      .then((response) => response.data);
  },

  saveStatus(gameStatus) {
    return instance.post('gamestatus', { ...gameStatus });
  },
};

export default gameStatusAPI;
