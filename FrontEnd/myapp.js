var myApp = angular.module('myApp', []);

app.config(function($routeProvider) {
   $routeProvider
    .when('/page1', {
        templateUrl: 'partials/Home.htm',
        controller:'mainController'
        })
    .when('/page2', {
        templateUrl: 'partials/Ordering.htm',
        controller:"orderingController'"
        })
    .when('/page3', {
        templateUrl: 'partials/Payment.htm'
        controller:'paymentController'
        })
          )
  }

myApp.controller('orderingController' , [
'$scope', function($scope)
$scope.toppings = []
$Scope.toppings[0]= {toppings: "Sausage", "Pepperoni", "Cheese"}


])


myApp.controller('mainController', [
  '$scope', '$http', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/food'
    }).then(function successCallback(response) { console.log(response);
        // this callback will be called asynchronously
        // when the response is available
      $scope.foods=response.data}, function errorCallback(error) { console.log(error);
        // called asynchronously if an error occurs
        // or server returns response with an error status.

      // console.log($scope);
    })
    $scope.foods = []
    $scope.foods[0]={image:'http://localhost:3000/food',distance:0.2 , rating: 4.1 , name:'Smashburger'}
  }])
