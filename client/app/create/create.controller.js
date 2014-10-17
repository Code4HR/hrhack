'use strict';

angular.module('hrhackApp')
  .controller('CreateCtrl', ['petitions', '$scope', '$location', function(petitions, $scope, $location) {
    $scope.petition = {};
    $scope.petition.name = 'Kyle';
    $scope.petition.description = 'Cool Project';
    $scope.petition.category = 'Transportation';
    $scope.petition.location = {};
    $scope.petition.location.city = 'Hampton';
    $scope.petition.stats = {};
    $scope.petition.stats.signaturesNeeded = 500;
    $scope.petition.stats.amountNeeded = 1000;
    $scope.petition.image = [{}];
    $scope.petition.image[0].fileName = 'http://dhhl.hawaii.gov/wp-content/uploads/2013/09/KumuhauWalls.jpg';
    $scope.petition.sortOrder = 100;

    $scope.cats = ['Green Space', 'Health & Fitness', 'Transportation', 'Education', 'Entertainment'];
    $scope.cities = ['Chesapeake', 'Hampton', 'Newport News', 'Norfolk', 'Portsmouth', 'Suffolk', 'Virginia Beach'];

    $scope.create = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        var container = {
          petition: $scope.petition
        };

        petitions.create(container).then(function(response) {
          $location.path('/petition/'+response._id['$old']);
        }, function(error) {
          console.log(error);
        });
      }
    };
  }]);
