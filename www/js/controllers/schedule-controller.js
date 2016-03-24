/*
*	Sample controller
*/
controllers.controller('scheduleCtrl', ['$scope', 'Schedule', function($scope, Schedule) {
	$scope.variable = "Variable!";
	$scope.collection = [];

	$scope.getCollection = function() {

		return $scope.collection = Schedule.all();
	};

	$scope.remoteSchedule = function() {
		var results = Schedule.resource.query({}, function() {
			angular.forEach(results, function(item) {
				$scope.collection.push(item);
			})
		}, function(err){
			console.log("NU GICK DET FEL!");
			console.log(err);
		});
	};

	$scope.getItem = function(item) {
		var results = Schedule.resource.get({id:item._id.$oid}, function() {
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
