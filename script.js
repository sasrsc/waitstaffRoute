// Code goes here

angular.module("myApp", ['ngRoute'])





.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'intro.html'
	}).when('/my-earnings',{
		templateUrl: 'my-earnings.html',
		controller: 'EarningsCtrl'
	}).when('/new-meal',{
		templateUrl: 'new-meal.html',
		controller: 'MealCtrl'
	});
}])

.controller('MainController',function($log,$scope,$route, $routeParams,$location) {
	
	// just seeing how this maps out on the UI
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
	// a base value
	var initial ={};
	// default values 
	initial.base = 0;
   	initial.tax = 8.5;
   	initial.tip = 0; 
	initial.subtotal = 0; 
	initial.total = 0; 
	initial.myEarnings=0;
	initial.meals=0;
	initial.avgTip=0;
	$scope.meal = {};
	$scope.meal.myEarnings=0;
	$scope.meal.meals=0;


	$scope.calculate=function(form){
	    	
    	if (form.$valid) {
			$log.info('Form is valid - do calculation!');
			$scope.meal.subtotal = $scope.meal.base * $scope.meal.tax * 0.01 + $scope.meal.base;  
			$scope.meal.tip = $scope.meal.base * $scope.meal.tip * 0.01; 
			$scope.meal.total = $scope.meal.tip + $scope.meal.subtotal; 
			//now add the value to my earnings
			$scope.meal.myEarnings=$scope.meal.myEarnings+$scope.meal.tip;
			$scope.meal.meals++;
			$scope.meal.avgTip=$scope.meal.myEarnings/$scope.meal.meals;

    	};
	};


})

.controller('EarningsCtrl', function($scope){
	//something
})
.controller('MealCtrl', function($log,$scope,$route,$routeParams){
	//something

	// copy the initial value with defaults and make it the meal object
	
   	$scope.meal.tax = 8.5;
   	$scope.meal.tip = 15; 
   	$scope.reset=function() {
    	$log.info('Reseting Form');
    	$scope.meal.tax = 8.5;
   		$scope.meal.tip = 15; 
   		$scope.meal.base=null;

    };	
})
.controller('IndexCtrl', function($scope){


	

});

