/**
* Service that handles the schedule.
**/
services.factory('Submit', function($resource) {
  var api_key = "ZZKN2zrVZD7CJSRt9VLYit8XW4wqLP4E";
  var submits = [];

  // Try LocalStorage
  if(typeof(Storage) !== "undefined") {
      // Woho! It worked. We must only store strings. Solution, stringify the js-objects when settings them!
      submits = JSON.parse(localStorage.getItem("submits"));
      if(submits === null){
        submits = [];
      }
  }

  var submissions = $resource("https://api.mlab.com/api/1/databases/studs-app/collections/submission/",{
      apiKey : api_key,
  });

  var successCallback = function(){
      submits = results;
      localStorage.removeItem("submits");
      localStorage.setItem("submits", JSON.stringify(submits));
  }

  var results = submissions.query({}, successCallback, function(err){
      console.log(err);


  });

  this.addSubmission = function(link, challengeID, description, participants) {
    submissions.save(JSON.stringify({
      'link': link,
      'challengeID': challengeID,
      'description': description,
      'participants': participants
    }), function(result) {
        console.log('Success!');
        console.log(result);
    }, function (err){
        console.log('Error');
        console.log(err);
    });
  }

  this.getChallengeSubmission = function(cID){
    submissions.query({challengeID:cID}, function(res){
      console.log(cID);
      console.log(res);
      return res;
    }, function(err){
        console.log(err);
    });
  }

  return {
      all: function() {
          return submits;
      },
      add: function(item) {
        submit.unshift(item);
        // Save locally!
        localStorage.setItem("submit", JSON.stringify(submit));
      },
      index: function(index) {
          return submit[index];
      },
      remove: function(item) {
          var index = submit.indexOf(item);
          if(index > -1) {
              submit.splice(index, 1);
          }
          // Save locally!
          localStorage.setItem("submit", JSON.stringify(submit));
      },
      resource: this
  };
});
