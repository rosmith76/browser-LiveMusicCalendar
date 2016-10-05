'use strict';
const app = require('../app');

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields (event.target);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePassword)
    .fail(ui.failure);
};

const onSignOut =(event) => {
  if (!app.user) {
    $('#message').text('You have to be logged in to sign out');
    return;
  }
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const updateId = (event) => {
  event.preventDefault();
  let id = $(event.target).attr("event-id");
  $(".update-event-button").attr("event-id", id);
};

const onUpdateEvent = (event) => {
  event.preventDefault();
  let id = $(".update-event-button").attr("event-id");
  let data = getFormFields(event.target);
  api.updateEvent(data, id)
    .done(ui.updateProjectSuccess)
    .fail(ui.failure);
};

const getID =  function (event){
  event.preventDefault();
  let id = $(event.target).attr("event-id");
  $(".delete-event-button").attr("event-id", id);
};

const onDeleteEvent =(event) => {
  event.preventDefault();
  let id =$(event.target).attr("event-id");
  api.deleteEvent(id)
    .done(ui.deleteEventSuccess)
    .fail(ui.failure);
};

const onAddEvents = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addEvents(data)
    .done(ui.addEventsSuccess)
    .fail(ui.failure);
};

const onShowEvents = (data) => {
  event.preventDefault();
  api.showEvents(data)
    .done(ui.showEventSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#add-event').on('submit', onAddEvents);
  $('#delete-event').on('submit', onDeleteEvent);
  $('#delete-event').on('submit', getID);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out-button').on('click', onSignOut);
  $('#my-events-button').on('click', onShowEvents);

  $('.event-display').on('click','.updat-event',updateId);
  $('#update-event').on('submit', onUpdateEvent);
  $('#sign-in-button').on('click', function(){
    $('#sign-in').show();
  });
  $('#sign-in').on('submit', function(){
    $('#sign-in').hide();
  });
  $('#sign-up-button').on('click', function(){
    $('#sign-up').show();
  });
  $('#sign-up').on('submit', function(){
    $('#sign-up').hide();
  });
  $('#change-password-button').on('click', function(){
    if (!app.user) {
      $('#message').text('You have to be logged in to change password');
      return;
    }
    $('#change-password').show();
  });
  $('#delete-events-button').on('click', function(){
    if (!app.user) {
      $('#message').text('You have to be logged in to delete events');
      return;
    }
    $('#delete-events').show();
  });
  $('#add-events-button').on('click', function(){
    if (!app.user) {
      $('#message').text('You have to be logged in to add events');
      return;
    }
    $('#add-events').show();
  });
  $('#change-password').on('submit', function(){
    $('#change-password').hide();
  });
};

module.exports = {
  addHandlers,
};
