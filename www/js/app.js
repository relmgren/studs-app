// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic','ionic.service.core', 'ngCordova', 'app.config', 'app.controllers', 'app.services', 'app.directives'])
.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
            $ionicPopup.confirm({
                title: "Internet is not working",
                content: "Internet is not working on your device."
            });
        }
    }
  });
})
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
})
var controllers = angular.module('app.controllers', []);
var services = angular.module('app.services', ['ngResource']);
var directives = angular.module('app.directives', []);
