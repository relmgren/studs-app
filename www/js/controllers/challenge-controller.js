/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeCtrl', ['$scope', 'Challenge',  function($scope, Schedule) {
	$scope.status = "Here we are going to list some challenges for you to do in the States"

	$scope.collection = Challenge.all();
	$scope.previousEvents = Challenge.previous();
	$scope.comingEvents = Challenge.coming();
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
