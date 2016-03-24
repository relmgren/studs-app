/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeCtrl', ['$scope', 'appSettings', function($scope, appSettings) {
	$scope.status = "Here we are going to list some challenges for you to do in the States"
	$scope.settings = appSettings;

	$scope.init = function() {
		// Run initial code here!
	};

	$scope.init();
}]);
