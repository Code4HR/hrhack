'use strict';

angular.module('hrhackApp')
  .controller('PetitionCtrl', ['petitions', '$scope', '$state', 'Auth', function(petitions, $scope, $state, Auth) {



    petitions.get($state.params.id).then(function(item) {
      $scope.petition = item.petition;
      console.log(item);
    });
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.paymentMade = false;

    $scope.submitPayment = function() {
      var signer = {
        userDetail: {
            email: "",
            nameFirst: "",
            nameLast: "",
            profileImage: "http://lorempixel.com/225/225/nightlife/"
        }
      };
      var name = Auth.getCurrentUser().name;
      var pieces = name.split(' ');
      signer.userDetail.nameFirst = pieces[0];
      signer.userDetail.nameLast = pieces[1];
      $scope.petition.signedBy.push(signer);

      var obj = {
        petition: $scope.petition
      }
      petitions.create(obj).then(function() {
        $scope.paymentMade = true;
      });
    }
  }]);
