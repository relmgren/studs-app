/*
*	Sample controller
*/
controllers.controller('sampleCtrl', ['$scope', 'Schedule', function($scope, Schedule) {
	$scope.variable = "Variable!";
	$scope.collection = [];

	$scope.getCollection = function() {
		$scope.collection = Schedule.all();
	};

	$scope.remoteSchedule = function() {
		var results = Schedule.resource.query({}, function() {
			angular.forEach(results, function(item) {
				$scope.collection.push(item);
			})
			console.log(results);
		}, function(err){
			console.log("NU GICK DET FEL!");
			console.log(err);
		});
	};

	$scope.getItem = function(item) {
		var results = Schedule.resource.get({id:item._id.$oid}, function() {
			console.log(results);
		}, function(err) {
			console.log(err);
		});
	};

	$scope.init = function() {
		// Run initial code here!
		$scope.getCollection();
		$scope.remoteSchedule();
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
