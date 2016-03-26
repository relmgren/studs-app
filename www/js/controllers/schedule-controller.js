/*
*	Sample controller
*/
controllers.controller('scheduleCtrl', ['$scope', 'Schedule', '$anchorScroll', '$location', function($scope, Schedule, $anchorScroll, $location) {
	$scope.collection = Schedule.all();
	$scope.previousEvents = Schedule.previous();
	$scope.comingEvents = Schedule.coming();
	



}]);
