/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeInfoCtrl', function($scope, $state, specificChallenge) {
	$scope.specificChallenge = specificChallenge;
	console.log(specificChallenge.img);
	$scope.status = "Here we are going to list some challenges for you to do in the States"

	$scope.init = function() { 
		// Run initial code here!
	};
});
