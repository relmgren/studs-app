/**
* Service that handles the schedule.
**/

services.factory('Schedule', function($resource) {
    var schedule = [];
    var api_key = "ZZKN2zrVZD7CJSRt9VLYit8XW4wqLP4E";
    // Try LocalStorage
    if(typeof(Storage) !== "undefined") {
        // Woho! It worked. We must only store strings. Solution, stringify the js-objects when settings them!
        schedule = JSON.parse(localStorage.getItem("schedule"));
        if(schedule === null) {
            // If nothing is yet set (first time use), use "default values"
            schedule = [];
        }
    }

    var schedule2 = this.Schedule =  $resource("https://api.mlab.com/api/1/databases/studs-app/collections/schedule/:id", {
        apiKey : api_key
    });

    return {
        all: function() {
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
