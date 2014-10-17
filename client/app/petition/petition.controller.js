'use strict';

angular.module('hrhackApp')
	.controller('PetitionCtrl', ['petitions', '$scope', '$state',
		function(petitions, $scope, $state) {
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
			});
		}
	]);