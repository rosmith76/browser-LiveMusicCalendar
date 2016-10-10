'use strict';
const app = require ('../app');

const clearInputField = () => {
  $('.input').val('');
};
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
  // clearInputField();
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
    clearInputField();
  app.user = data.user;
};

// const updateEventSuccess = () => {
//   clearInputField();
//   $('#updateEventtModal').modal('hide');
// };

const showEventsTemplate = require('../templates/show-all-events.handlebars');

const showEventSuccess = (data) => {
  $('.event-display').html(showEventsTemplate(data));
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
