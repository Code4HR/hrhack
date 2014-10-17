/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /petitions              ->  index
 * POST    /petitions              ->  create
 * GET     /petitions/:id          ->  show
 * PUT     /petitions/:id          ->  update
 * DELETE  /petitions/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var request = require('request');
var apiUrlBase = 'https://api.mongolab.com/api/1/databases/civicstarter/collections/Petition';
var key = '?apiKey=' + process.env.API_KEY;

// Get list of things
exports.index = function(req, res) {

  request(apiUrlBase + key, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var petitions = JSON.parse(body);
      return res.json(200, petitions);
    }

    handleError(res, response.statusCode, error);
  });
};

// Get a single thing
exports.show = function(req, res) {

  request(apiUrlBase + '/' + req.params.id + key, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var petition = JSON.parse(body);
      return res.json(200, petition);
    }

    handleError(res, response.statusCode, error);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {

  var options = {
    uri: apiUrlBase + key,
    method: 'POST',
    json: req.body
  };
  request(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      return res.json(200, body);
    }

    handleError(res, response.statusCode, error);
  });
};

// Updates a thing in the DB.
exports.update = function(req, res) {

  var options = {
    uri: apiUrlBase + '/' + req.params.id + key,
    method: 'PUT',
    json: req.body
  };
  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      return res.json(200, body);
    }
    
    handleError(res, response.statusCode, error);
  });
};

// // Updates an existing thing in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Thing.findById(req.params.id, function (err, thing) {
//     if (err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     var updated = _.merge(thing, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, thing);
//     });
//   });
// };

// // Deletes a thing from the DB.
// exports.destroy = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     thing.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

function handleError(res, code, err) {
  return res.status(code).send(err);
}
