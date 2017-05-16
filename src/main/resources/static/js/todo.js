angular.module('myReverseFilterApp',[])
.filter('reverse', function() {
	return function(input, uppercase) {
		input = input || '';
		var out = '';
		for(var i = 0; i < input.length; i++) {
			out = input.charAt(i) + out;
		}
		if(uppercase) {
			out = out.toUpperCase();
		}
		return out;
	}
})
.controller('MyController', ['$scope', 'reverseFilter',function($scope, reverseFilter) {
	$scope.greeting = 'hello';
	$scope.filterGreeting = reverseFilter($scope.greeting);
}]);