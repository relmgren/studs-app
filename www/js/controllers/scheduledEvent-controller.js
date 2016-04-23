controllers.controller('scheduledEventCtrl', function($scope, $state, $cordovaGeolocation, happening) {
    $scope.happening = happening;
    var coordinates = {lat: $scope.happening.lat, lng: $scope.happening.lng};
    var options = {timeout: 10000, enableHighAccuracy: false};

    $cordovaGeolocation.getCurrentPosition(options). then(function(position) {
        var latLng = new google.maps.LatLng(coordinates.lat, coordinates.lng);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng
          });
        });
    }, function(err) {
        console.err(err);
    });
});
