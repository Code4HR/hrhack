'use strict';

function CarouselCtrl($scope, petitions) {
	$scope.myInterval = 5000;
	$scope.slides = [];

	petitions.get().then(function(response) {
		response.forEach(function(item){	
			$scope.slides.push({
				title: item.petition.name,
				description: item.petition.description,
				image: item.petition.image[0].fileName,
				location: item.petition.location.city + ', ' + item.petition.location.state
			});
		});
	});
}

angular.module('hrhackApp').controller('CarouselCtrl', ['$scope', 'petitions', CarouselCtrl]);