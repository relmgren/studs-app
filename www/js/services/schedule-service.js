/**
* Service that handles the schedule.
**/

services.factory('Schedule', function($resource) {
    var schedule = [];
    var api_key = "ZZKN2zrVZD7CJSRt9VLYit8XW4wqLP4E";
    var comingEvents = [];
    var previousEvents = [];

    // Try LocalStorage
    if(typeof(Storage) !== "undefined") {
        // Woho! It worked. We must only store strings. Solution, stringify the js-objects when settings them!
        schedule = JSON.parse(localStorage.getItem("schedule"));
        if(schedule === null) {
            // If nothing is yet set (first time use), use "default values"
            schedule = [];
        }
    }

    var scheduleFactory = this.Schedule = $resource("https://api.mlab.com/api/1/databases/studs-app/collections/schedule/:id", {
        apiKey : api_key
    });





    var divideEvents = function() {
      comingEvents = [];
      previousEvents = [];
      var date = new Date(Date.now());
      var month = date.getUTCMonth();
      var day = date.getUTCDate();
      for(i = 0; i < schedule.length; i++){
        var date2 = new Date(schedule[i].date);

        if(date2.getUTCMonth() < month){
          previousEvents.push(schedule[i]);
          continue;
        }
        if(date2.getUTCDate() < day && date2.getUTCMonth() == month){
          previousEvents.push(schedule[i]);
          continue;

        }
          comingEvents.push([i]);

      }

    };

    var successCallback = function() {
        schedule = results;
        sortCollectionByDate();
        divideEvents();
        localStorage.removeItem("schedule");
        localStorage.setItem("schedule", JSON.stringify(schedule));
    };

    var results = scheduleFactory.query({}, successCallback, function(err){
        console.log(err);

        $ionicPopup.confirm({
            title: "No connection (or server problem)",
            content: "You are using a cached version of the schedule."
        });
    });

    var sortCollectionByDate = function(){
		schedule.sort(function compare(a,b) {
  		if (a.date < b.date)
     		return -1;
  		if (a.date > b.date)
    		return 1;
  		return 0;
		});
	}

    return {
        all: function() {
            successCallback();
            return schedule;
        },
        add: function(item) {
            schedule.unshift(item);
            // Save locally!
            localStorage.setItem("schedule", JSON.stringify(schedule));
        },
        index: function(index) {
            return schedule[index];
        },
        previous: function() {
          
            console.log(previousEvents);
            return previousEvents;
        },
        coming: function() {
            return comingEvents;
        },
        remove: function(item) {
            var index = schedule.indexOf(item);
            if(index > -1) {
                schedule.splice(index, 1);
            }
            // Save locally!
            localStorage.setItem("schedule", JSON.stringify(schedule));
        },
        resource: this.Schedule
    };
});
