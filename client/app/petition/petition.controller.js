'use strict';

angular.module('hrhackApp')
  .controller('PetitionCtrl', ['petitions', '$scope', '$state', 'Auth', function(petitions, $scope, $state, Auth) {
    petitions.get($state.params.id).then(function(item) {
      $scope.petition = item.petition;
    });
    $scope.getCurrentUser = Auth.getCurrentUser;
  }]);
