'use strict';

angular.module('hrhackApp')
  .controller('LandingCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.email = '';
    $scope.notValid = false;
    $scope.notSubmitted = true;

    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    $scope.$watch('email', function(newVal, oldVal) {
      if(!!newVal && !validateEmail(newVal)) {
        $scope.notValid = true;
      }else {
        $scope.notValid = false;
      }
    });

    $scope.registerNotify = function(email) {

        var apiKey = '9rLkL7jBXiss089QQhpDsvrsKZjegWW1',
            url = "https://api.mongolab.com/api/1/databases/civicstarter/collections/LaunchMailingList?apiKey="+apiKey,
            obj = JSON.stringify({'email': $scope.email});
        $http.post( url, obj).success(function(data) {
          console.log(data);
          $scope.notSubmitted = false;
        }).error(function(err) {
          console.error(err);
        });
    }
  }]);
