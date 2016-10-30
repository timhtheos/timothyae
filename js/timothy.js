var helloApp = angular.module('helloApp', []);

helloApp.controller('helloCtrl', function ($scope) {
	$scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }  
});
