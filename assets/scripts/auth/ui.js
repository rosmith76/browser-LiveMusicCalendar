'use strict';
const app = require ('../app');

const signInSuccess = (data) => {
  app.user = data.user;
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};
const changePassword = () => {
  console.log ('Password Changed');
};

const signOutSuccess = () => {
  app.user = null;
  console.log ('Signed out');
};

const deleteEventSuccess = (data) => {
  console.log (data);
};

const addEventsSuccess = (data) => {
  app.user = data.user;
};

const showEventsTemplate = require('../templates/show-all-events.handlebars');

const showEventSuccess = (events) => {
  $('.event-display').html(showEventsTemplate(events));
  console.log(events);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePassword,
  deleteEventSuccess,
  signOutSuccess,
  addEventsSuccess,
  showEventSuccess
};


// const getGameSuccess = (data) => {
//
//   let wonX = 0;
//   let wonO = 0;
//   data.games.forEach(function(game) {
//     const status = logic.gameStatus(game.cells);
//     if (status.winner === 'X') {
//       wonX++;
//     }
//     else if (status.winner === 'O') {
//       wonO++;
//     }
//   });
//
//   $('#game-message').text('Your game stats are: ' + wonX + ' games won by X and ' + wonO + ' games won by O ');
// };
