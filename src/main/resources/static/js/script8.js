var app = angular.module('form-example1', []);
 
var INTEGER_REGEXP = /^\-?\d+$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
    	if(ctrl.$isEmpty(modelValue)) {
    		return true;
    	}
        if (INTEGER_REGEXP.test(viewValue)) {
          // 验证通过
          return true;
        }
          // 验证不通过 返回 undefined (不会有模型更新)
          return false;
        }
    }
  };
});
 
var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
app.directive('smartFloat', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.float = function(modelValue, viewValue) {
    	  if(ctrl.$isEmpty(modelValue)) {
    		  return true;
    	  }
        if (FLOAT_REGEXP.test(viewValue)) {
          return true;
        }
         return false;
        }
    }
  };
});