/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeInfoCtrl', function($scope, $state, specificChallenge) {
	$scope.studsList = ["Anna baklänges", "Arro", "Atlanta-Brian", "Axl", "Bae-Q", "BJ-eagle", "D ä najs", "Dina", "Elin", "Emelie", "Gla'", "J-High", "Jocke", "Johan", "Katja",
	 "Kent", "Lando", "Masko", "Moppepojken", "Nisse", "Powerpuff Piuhola", "Ra's Al Ghul", "ReeRee", "Sebbe", "Sommar", "Sundbyberg", "Wilczek", "Will.i.am"];
	$scope.specificChallenge = specificChallenge;
	console.log(specificChallenge.img);
	$scope.status = "Here we are going to list some challenges for you to do in the States"

	$scope.init = function() {
		// Run initial code here!
	};
});
