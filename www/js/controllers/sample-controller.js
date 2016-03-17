/*
*	Sample controller
*/
controllers.controller('sampleCtrl', ['$scope', 'Schedule', function($scope, Schedule) {
	$scope.variable = "Variable!";
	$scope.collection = [];

	$scope.getCollection = function() {
		$scope.collection = Schedule.all();
	};

	$scope.removeItem = function(item) {
		SampleService.remove(item);
	};

	$scope.init = function() {
		// Run initial code here!
		$scope.getCollection();
	};

	$scope.init();
}]);

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
