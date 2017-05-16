var myApp = angular.module('spicyApp2', []);
 
myApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.spice = 'very';
    $scope.customSpice = 'wasabi';
    
    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
    
}]);