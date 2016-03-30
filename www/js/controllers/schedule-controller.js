/*
*	Sample controller
*/
controllers.controller('scheduleCtrl', ['$scope', 'Schedule', '$anchorScroll', '$location', function($scope, Schedule, $anchorScroll, $location) {
	$scope.collection = Schedule.all();
	$scope.previousEvents = Schedule.previous();
	$scope.comingEvents = Schedule.coming();
	$scope.groups = [$scope.previousEvents, $scope.comingEvents];
	$scope.showing = false;
	$scope.showPrevious = "Show previous events";
	$scope.hidePrevious = "Hide previous events";
	$scope.buttonText = $scope.showPrevious;


	$scope.toggle = function(){
		$scope.showing = !$scope.showing;
		if($scope.showing){
				$scope.buttonText = $scope.hidePrevious;
		} else {
			$scope.buttonText = $scope.showPrevious;

		}
	}



}]);
