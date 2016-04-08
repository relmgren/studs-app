/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeUploadCtrl', function($scope, $state, specificChallenge) {
	$scope.specificChallenge = specificChallenge;
	console.log(specificChallenge);
	$scope.status = "Upload challenge"

	$scope.init = function() {
		// Run initial code here!
	};
});
