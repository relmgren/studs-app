/*
*	Second controller (should be in separate file)
*/
controllers.controller('challengeInfoCtrl', function($scope, $state, specificChallenge, $http) {
	$scope.studsList = ["anna", "aroshine", "brian", "axel", "eric", "bjorn", "denise", "dina", "elin", "emelie", "happy", "jenny", "jocke", "johan", "katja",
	 "marcus", "emilio", "david", "victor", "nisse", "petriina", "rasmus", "rebecca", "sebastian", "fredrik", "per", "alexander", "william"];
	$scope.specificChallenge = specificChallenge;
	console.log(specificChallenge.img);
	$scope.status = "Here we are going to list some challenges for you to do in the States";


	var pictureSource;
	var cameraSource;
	var destinationType;
	var POSTurl = "https://api.imgur.com/3/upload";
	var apiKey = "861253e98acaf9740ff893b008bdeb4fc7478639";
	$scope.mypicture;

	//var GETurl = "https://api.imgur.com/3/image/{id}"

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
				$scope.postToImgur($scope.mypicture);
				$scope.uploadView();
			},
			//error callback
			function (err) {
				console.log("camera error: ", err);
			},
			options);
	};

	$scope.postToImgur = function(pic){
		$http({
			method: 'POST',
			headers: {
				'Authorization': 'Client-ID 6b7c2f43e409af6'
			},
			url: POSTurl,
			data: {
				'image': pic
			},
		}).then(function successCallback(response) {
			console.log(response);
				// this callback will be called asynchronously
				// when the response is available
			}, function errorCallback(response) {
				console.log(response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	}


	// File name only



	$scope.newUpload = function(buttonid){
		if(buttonid === 'camera'){
			$scope.getPicture(cameraSource);
		} else {
			$scope.getPicture(pictureSource);
		}
	}

	$scope.uploadView = function() {
		document.getElementById('challenge-div').style.display = "none";
		document.getElementById('imgUploader').style.display = "block";
	}

	$scope.submitUpload = function(){
		//POST to imgur

		document.getElementById('imgUploader').style.display = "none";
		document.getElementById('challenge-div').style.display = "block";
	}
});
