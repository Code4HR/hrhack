'use strict';

angular.module('hrhackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('petition', {
        url: '/petition/:id',
        templateUrl: 'app/petition/petition.html',
        controller: 'PetitionCtrl'
      });
  });