'use strict';

angular.module('hrhackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingCtrl'
      });
  });