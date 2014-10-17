'use strict';

function PetitionsService($q, $http) {
  var apiUrlBase = 'https://api.mongolab.com/api/1/databases/civicstarter/collections/Petition';
  var key = '?apiKey=9rLkL7jBXiss089QQhpDsvrsKZjegWW1';

  var getAll = function() {
    var defer = $q.defer();
    var requestUri = apiUrlBase + key;

    $http.get(requestUri).success(function(response) {
      defer.resolve(response);
    }).error(function(error) {
      defer.reject(error);
    });

    return defer.promise;
  };

  var getOne = function(id) {
    var defer = $q.defer();
    var requestUri = apiUrlBase + '/' + id + key;

    $http.get(requestUri).success(function(response) {
      defer.resolve(response);
    }).error(function(error) {
      defer.reject(error);
    });

    return defer.promise;
  };

  var get = function(id) {
    if (typeof id === "undefined") {
      return getAll();
    } else {
      return getOne(id);
    }
  };

  var create = function(petition) {
    var defer = $q.defer();
    var requestUri = apiUrlBase + key;

    $http.post(requestUri, petition).success(function(response) {
      defer.resolve(response);
    }).error(function(error) {
      defer.reject(error);
    });

    return defer.promise;
  };

  return {
    get: get,
    create: create
  };
}

angular.module('hrhackApp').factory('petitions', ['$q', '$http', PetitionsService]);