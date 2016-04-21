/**
* Service that handles the schedule.
**/

services.factory('Challenge', function($resource) {
    var challenge = [];
    var api_key = "ZZKN2zrVZD7CJSRt9VLYit8XW4wqLP4E";
    var comingChallenges = [];
    var previousChallenges = [];
    var submits = [];

    // Try LocalStorage
    if(typeof(Storage) !== "undefined") {
        // Woho! It worked. We must only store strings. Solution, stringify the js-objects when settings them!
        challenge = JSON.parse(localStorage.getItem("challenge"));
        if(challenge === null) {
            // If nothing is yet set (first time use), use "default values"
            challenge = [];
        }
        // Same for submissions
        submits = JSON.parse(localStorage.getItem("submits"));
        if(submits === null){
          submits = [];
        }
    }

    var challengeFactory = this.Challenge = $resource("https://api.mlab.com/api/1/databases/studs-app/collections/challenge/:id", {
        apiKey : api_key
    });

    var submissions = $resource("https://api.mlab.com/api/1/databases/studs-app/collections/submission/:id", {
        apiKey : api_key
    });

    var divideEvents = function() {
      comingChallenges = [];
      previousChallenges = [];
      var date = new Date(Date.now());
      var month = date.getUTCMonth();
      var day = date.getUTCDate();
      for(i = 0; i < challenge.length; i++){
        var date2 = new Date(challenge[i].date);

        if(date2.getUTCMonth() < month){
          previousChallenges.push(challenge[i]);
          continue;
        }
        if(date2.getUTCDate() < day && date2.getUTCMonth() == month){
          previousChallenges.push(challenge[i]);
          continue;

        }
          comingChallenges.push(challenge[i]);

      }
      return [previousChallenges, comingChallenges];

    };
    var sortCollectionByDate = function(){
      challenge.sort(function compare(a,b) {
        if (a.date < b.date)
          return -1;
        if (a.date > b.date)
          return 1;
        return 0;
      });
    }


    var successCallback = function() {
        challenge = results;
        sortCollectionByDate();
        divideEvents();
        localStorage.removeItem("challenge");
        localStorage.setItem("challenge", JSON.stringify(challenge));
    };


    //TODO
    var submissionCallback = function(){
        submits = submitResults;
        localStorage.removeItem("submits");
        localStorage.setItem("submits", JSON.stringify(submits));
    }

    var results = challengeFactory.query({}, successCallback, function(err){
        console.log(err);

        $ionicPopup.confirm({
            title: "No connection (or server problem)",
            content: "You are using a cached version of the challenge."
        });
    });

    var submitResults = submissions.query({}, submissionCallback, function(err){
        console.log(err);

        $ionicPopup.confirm({
            title: "No connection (or server problem)",
            content: "You are using a cached version of the challenge."
        });
    });




    return {
        all: function() {

            return challenge;
        },
        add: function(item) {
           challenge.unshift(item);
            // Save locally!
            localStorage.setItem("challenge", JSON.stringify(challenge));
        },
        index: function(index) {
            return challenge[index];
        },
        previous: function() {
            var list = divideEvents();
            return  list[0];
        },
        coming: function() {
          var list = divideEvents();

            return list[1];
        },
        remove: function(item) {
            var index = challenge.indexOf(item);
            if(index > -1) {
                challenge.splice(index, 1);
            }
            // Save locally!
            localStorage.setItem("challenge", JSON.stringify(challenge));
        },
        resource: this.Challenge
    };
});
