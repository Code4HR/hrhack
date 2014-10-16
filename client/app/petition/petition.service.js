'use strict';

function PetitionsService($q, $http) {
  var url = 'https://api.mongolab.com/api/1/databases/civicstarter/collections/Petition?apiKey=',
    apiKey = '9rLkL7jBXiss089QQhpDsvrsKZjegWW1';

  function get() {
    var defer = $q.defer(),
      requestUri = url + apiKey;

    $http.get(requestUri).success(function(response) {
      defer.resolve(response);
    }).error(function(error) {
      throw error;
    });

    return defer.promise;
  }

  return {
    get: get
  };
}

angular.module('hrhackApp').factory('petitions', ['$q', '$http', PetitionsService]);