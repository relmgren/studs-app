/*
*   Sample service
*   Using $http as example for dependency injection. Not used atm.
*   LocalStorage could be defined as an independent service also.
*/
services.factory('SampleService', ['$http', function($http) {
    var collection = [];
    // Try LocalStorage
    if(typeof(Storage) !== "undefined") {
        // Woho! It worked. We must only store strings. Solution, stringify the js-objects when settings them!
        collection = JSON.parse(localStorage.getItem("collection"));
        if(collection === null) {
            // If nothing is yet set (first time use), use "default values"
            collection = [{
                title: "Oland",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            },
            {
                title: "Barroq",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            },
            {
                title: "Eggar",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }];
        }
    }

    return {
        all: function() {
            return collection;
        },
        add: function(item) {
            collection.unshift(item);
            // Save locally!
            localStorage.setItem("collection", JSON.stringify(collection));

        },
        remove: function(item) {
            var index = collection.indexOf(item);
            if(index > -1) {
                collection.splice(index, 1);
            }
            // Save locally!
            localStorage.setItem("collection", JSON.stringify(collection));
        }
    };
}]);
