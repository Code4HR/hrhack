'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "hrhack-secret",
  // Control debug level for modules using visionmedia/debug
  DEBUG: '',
  MONGOLAB_URI: 'mongodb://hackuser:hack4hr@ds045970.mongolab.com:45970/hrhack',
  API_KEY: '9rLkL7jBXiss089QQhpDsvrsKZjegWW1'
};
