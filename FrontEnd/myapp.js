var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    $scope.foods = [] 
    $scope.foods[0]={image:'img/hamburger.png',distance:0.2 , rating: 4.1 , name:'Smashburger'}
    
    
    
}]);






