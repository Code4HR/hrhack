'use strict';

angular.module('hrhackApp')
  .controller('PetitionCtrl', ['petitions', '$scope', '$state', function(petitions, $scope, $state) {
    petitions.get($state.params.id).then(function(item) {
      $scope.petition = item.petition;
    });
  }]);