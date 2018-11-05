var myApp = angular.module('myApp', []);

myApp.controller('mainController', [
  '$scope', '$http', function($scope, $http) {
    console.log($scope);
    $http({
      method: 'GET',
      url: 'http://localhost:3000/food'
    }).then(function successCallback(response) { console.log(response);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(error) { console.log(error);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    $scope.foods = []
    $scope.foods[0]={image:'img/hamburger.png',distance:0.2 , rating: 4.1 , name:'Smashburger' }



}]);
