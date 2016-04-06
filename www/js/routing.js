/*
*	Routing
*/
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('app', {
    url: '/',
    abstract: true,
    templateUrl: 'views/layouts/main.html'
  })
  .state('app.start', {
    url: '',
    views: {
      'appContent' :{
        templateUrl: 'views/start.html',
        controller : "scheduleCtrl"
      }
    }
  })
  .state('app.scheduledEvent', {
        url: "/schedule/:scheduledEvent",
        views: {
            'appContent' :{
                templateUrl: 'views/scheduledEvent.html',
                controller : "scheduledEventCtrl"
            }
        },
        resolve: {
            happening: function($stateParams, Schedule) {
              return Schedule.index($stateParams.scheduledEvent)
            }
        }
    })
  .state('app.challenges', {
    url: 'challenges',
    views: {
      'appContent' :{
        templateUrl: 'views/challenges.html',
        controller : "challengeCtrl"
      }
    }
  })
  .state('app.challenge_info', {
    url: '/challenges/challenge_info',
    views: {
      'appContent' :{
        templateUrl: 'views/challenge_info.html',
        controller : "challenge_infoCtrl"
      }
    }
  })
  .state('app.information', {
    url: 'information',
    views: {
      'appContent' :{
        templateUrl: 'views/information.html',
        controller : ""
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}]);
