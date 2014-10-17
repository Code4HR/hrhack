'use strict';

function CarouselCtrl($scope, petitions) {
	$scope.myInterval = 5000;
	$scope.slides = [];

	petitions.get().then(function(response) {
		response.sort(function(a, b) {
			console.log(a, b);
			return a.petition.sortOrder - b.petition.sortOrder;
		});
		response.forEach(function(item) {
			var signaturesAmt = Math.round(item.petition.stats.signatureCount / item.petition.stats.targetSignatureCount * 100),
				fundingAmt = Math.round(item.petition.stats.dollarsCollected / item.petition.stats.targetDollarsCollected * 100);

			$scope.slides.push({
				title: item.petition.name,
				description: item.petition.description,
				image: item.petition.image[0].fileName,
				location: item.petition.location.city + ', ' + item.petition.location.state,
				category: item.petition.category,
				signatures: {
					amt: signaturesAmt,
					success : signaturesAmt < 100 ? false : true
				},
				funding: {
					amt: fundingAmt,
					success: fundingAmt < 100 ? false : true
				},
				id: item._id['$oid']
			});
		});
	});
}

angular.module('hrhackApp').controller('CarouselCtrl', ['$scope', 'petitions', CarouselCtrl]);