/*
*	Sample controller
*/
controllers.controller('scheduleCtrl', ['$scope', 'Schedule', '$anchorScroll', '$location', function($scope, Schedule, $anchorScroll, $location) {
	$scope.variable = "Variable!";
	$scope.collection = Schedule.all();

	$scope.getCollection = function() {
		return $scope.collection = Schedule.all();
	};

	//Får ligga kvar sålänge, kanske tas bort
	 $scope.scrollToCurrent = function() {

		 // set the location.hash to the id of
		 // the element you wish to scroll to.
		 $location.hash($scope.getEventToday()._id.$oid);

		 // call $anchorScroll()
		 $anchorScroll();
	 };

	$scope.init = function() {
		// Run initial code here!
		$scope.getCollection();
	};
}]);
