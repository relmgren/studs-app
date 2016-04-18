/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeInfoCtrl', function($scope, $state, specificChallenge) {
	$scope.studsList = ["anna", "aroshine", "brian", "axel", "eric", "bjorn", "denise", "dina", "elin", "emelie", "happy", "jenny", "jocke", "johan", "katja",
	 "marcus", "emilio", "david", "victor", "nisse", "petriina", "rasmus", "rebecca", "sebastian", "fredrik", "per", "alexander", "william"];
	$scope.specificChallenge = specificChallenge;
	console.log(specificChallenge.img);
	$scope.status = "Here we are going to list some challenges for you to do in the States"

	$scope.init = function() {
		// Run initial code here!
	};

	$scope.imgClick = function(id){
		console.log(id);
		if(!document.getElementById(id).checked){
			document.getElementById(""+id+"-img").style.border = "0";
		} else {
			document.getElementById(""+id+"-img").style.border = "2px solid #7ac89c";
		}
	}

	$scope.newUpload = function(){
		document.getElementById('imgUploader').style.display = "block";
	}
});
