/*
*	Sample controller
*/
controllers.controller('scheduleCtrl', ['$scope', 'Schedule', '$anchorScroll', '$location', function($scope, Schedule, $anchorScroll, $location) {
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

	$scope.getEventToday = function() {

		$scope.sortCollectionByDate();
		var date = new Date(Date.now());
		var month = date.getUTCMonth();
		var day = date.getUTCDate();
		for(i = 0; i < $scope.collection.length; i++){
			var date2 = new Date($scope.collection[i].date);
			if(date2.getUTCMonth() < month){
				continue;
			}
			if(date2.getUTCDate() < day){
				continue;
			}
			return $scope.collection[i];
		}
	};

	//Får ligga kvar sålänge, kanske tas bort
	 $scope.scrollToCurrent = function() {

		 // set the location.hash to the id of
		 // the element you wish to scroll to.
		 $location.hash($scope.getEventToday()._id.$oid);

		 // call $anchorScroll()
		 $anchorScroll();
	 };



	$scope.sortCollectionByDate = function(){
		$scope.collection.sort(function compare(a,b) {
  		if (a.date < b.date)
     		return -1;
  		if (a.date > b.date)
    		return 1;
  		return 0;
		});
	}

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
