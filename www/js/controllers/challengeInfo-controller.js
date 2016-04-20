/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeInfoCtrl', function($scope, $state, specificChallenge) {
	$scope.studsList = ["anna", "aroshine", "brian", "axel", "eric", "bjorn", "denise", "dina", "elin", "emelie", "happy", "jenny", "jocke", "johan", "katja",
	 "marcus", "emilio", "david", "victor", "nisse", "petriina", "rasmus", "rebecca", "sebastian", "fredrik", "per", "alexander", "william"];
	$scope.specificChallenge = specificChallenge;
	console.log(specificChallenge.img);
	$scope.status = "Here we are going to list some challenges for you to do in the States";

	var pictureSource;
	var cameraSource;
	var destinationType;
	var url;

	// on deviceready check if camera is in use.
	ionic.Platform.ready(function() {
		if(!navigator.camera) {
			//error
			return;
		}
		pictureSource = navigator.camera.PictureSourceType.PHOTOLIBRARY;
		cameraSource = navigator.camera.PictureSourceType.CAMERA;
		destinationType = navigator.camera.DestinationType.FILE_URI;
	});

	$scope.selectedParticipants = [];

	$scope.init = function() {
		// Run initial code here!
	};

	$scope.imgClick = function(id){
		if(!document.getElementById(id).checked){
			document.getElementById(""+id+"-img").style.border = "0";
			$scope.selectedParticipants.splice($scope.selectedParticipants.indexOf(id) ,1);

		} else {
			document.getElementById(""+id+"-img").style.border = "2px solid #7ac89c";
			$scope.selectedParticipants.push(id);
		}
	}

	$scope.getPicture = function(source) {
		var options = {
			quality: 50,
			destinationType: destinationType,
			sourceType: source
		};
		if (!navigator.camera) {
			//error
			console.log("camera error before using camera");
			return;
		}
		navigator.camera.getPicture(
			//success callback
			function (imageURI) {
				$scope.mypicture = imageURI;
			},
			//error callback
			function (err) {
				console.log("camera error: ", err);
			},
			options);
	};

	$scope.newUpload = function(buttonid){
		if(buttonid === 'camera'){
			$scope.getPicture(cameraSource);
		} else {
			$scope.getPicture(pictureSource);
		}

		document.getElementById('challenge-div').style.display = "none";
		document.getElementById('imgUploader').style.display = "block";
	}

	$scope.submitUpload = function(){
		//POST to imgur

		document.getElementById('imgUploader').style.display = "none";
		document.getElementById('challenge-div').style.display = "block";
	}
});
