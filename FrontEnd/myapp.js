var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(function($routeProvider) {
   $routeProvider
    .when('/', {
        templateUrl: 'main.htm',
        controller:'mainController'
        })
    .when('/order', {
        templateUrl: 'ordering.htm',
        controller:"orderingController"
        })
	.when('/pay', {
	   templateUrl: 'pay.htm', 
	   controller:"payController"
   })
}
  )

myApp.controller('orderingController' , [
'$scope', function($scope){
$scope.toppings = []
$scope.toppings[0]= {name:'Sausage'}
}
])

myApp.controller('payController' , [
'$scope', function($scope) {
	// everything 
}	
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
