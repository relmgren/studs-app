/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeCtrl', ['$scope', 'Challenge',  function($scope, Challenge) {
	$scope.status = "Here we are going to list some challenges for you to do in the States"

	$scope.collection = Challenge.all();
	$scope.previousChallenges = Challenge.previous();
	$scope.comingChallenges = Challenge.coming();
	$scope.groups = [$scope.previousChallenges, $scope.comingChallenges];
	$scope.showing = false;
	$scope.showPrevious = "Show previous challenges";
	$scope.hidePrevious = "Hide previous challenges";
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
