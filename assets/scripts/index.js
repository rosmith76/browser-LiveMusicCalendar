'use strict';


//
//
// // user require with a reference to bundle the file and use it in this file
// // var example = require('./example');
//
// // use require without a reference to ensure a file is bundled
require('./example');
require('./auth/api');
require('./auth/events');
require('./auth/ui');
// require('./calendar/api');
// require('./calendar/ui');
// require('./calendar/events');

// const ui = require('./calendar/ui');

const authEvents = require('./auth/events.js');

$(() => {
  // $('container').show();
  // $('form').hide();
  authEvents.addHandlers();
  // ui.addHandlers();
});
