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
};

const signOutSuccess = () => {
  app.user = null;
};

const deleteEventSuccess = (data) => {
  console.log (data);
};

const addEventsSuccess = (data) => {
    clearInputField();
  app.user = data.user;
};

const updateEventSuccess = () => {
};

const showEventsTemplate = require('../templates/show-all-events.handlebars');

const showEventsSuccess = (data) => {
  $('.event-display').html(showEventsTemplate(data));
};

// const showSingleEventTemplate = require('../templates/show-event.handlebars');
//
// const showSingleEventSuccess = (data) => {
//   $('.event-display').html(showSingleEventTemplate(data));
// };

module.exports = {
  failure,
  success,
  signInSuccess,
  changePassword,
  deleteEventSuccess,
  signOutSuccess,
  addEventsSuccess,
  showEventsSuccess,
  updateEventSuccess
};
