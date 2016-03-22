/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeCtrl', ['$scope', 'appSettings', function($scope, appSettings) {
	$scope.variable = "Second view!";
	$scope.settings = appSettings;

	$scope.init = function() {
		// Run initial code here!
	};

	$scope.init();
}]);
