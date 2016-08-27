var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(['$routeProvider', function ($routeProvider){
  $routeProvider.
    when("/cats", {
      templateUrl: "/views/partials/cats.html",
      controller: "catController"
    }).
    when("/dogs", {
      templateUrl: "/views/partials/dogs.html",
      controller: "dogController"
    }).
    otherwise({
      redirectTo: "/cats"
    });
}]);
