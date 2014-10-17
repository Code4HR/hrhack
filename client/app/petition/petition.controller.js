'use strict';

angular.module('hrhackApp')
  .controller('PetitionCtrl', ['petitions', '$scope', '$state', 'Auth', function(petitions, $scope, $state, Auth) {

    //Blame Gary
    $scope.width = window.innerWidth;
    window.addEventListener('resize', function(){
      $scope.width = window.innerWidth;
    });

    petitions.get($state.params.id).then(function(item) {
      $scope.petition = item.petition;
      var signaturesAmt = Math.round(item.petition.stats.signatureCount / item.petition.stats.targetSignatureCount * 100),
        fundingAmt = Math.round(item.petition.stats.dollarsCollected / item.petition.stats.targetDollarsCollected * 100);

      $scope.petition.signatures = {
        amt: signaturesAmt,
        success: signaturesAmt < 100 ? false : true
      };
      $scope.petition.funding = {
        amt: fundingAmt,
        success: fundingAmt < 100 ? false : true
      };
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
      $scope.petition.stats.signatureCount++;
      $scope.petition.signedBy.push(signer);

      var obj = {
        petition: $scope.petition
      }
      petitions.update($state.params.id, obj).then(function(data) {
        console.log(data);
        $scope.paymentMade = true;
      });
    }
  }]);
