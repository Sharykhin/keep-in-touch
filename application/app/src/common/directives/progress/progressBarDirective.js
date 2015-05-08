define([
	'../../module'
], function(module) {

	module.directive('progressBar',[function() {
		return {
			restrict: "E",
			scope: { 
		    	form: '=',
		    	model: '=',
		    	fields: '='
		    },	
			templateUrl: 'src/common/directives/progress/progressBar.html',		 
			link: function(scope, element, attrs) {
				var form = angular.element(document.querySelector('form[name="' + scope.form.$name + '"]'));
				scope.progress = 0;
				var feildName;
				var names = [];
				var step = (100 / parseInt(scope.fields,10));
				console.log(step);
				form.on('change',function(event){
					feildName = event.target.name;

					if (event.target.value != '') {
						scope.progress += step;
					} else {
						scope.progress -= step;
					}					
					
				});
				console.log(form);
			}
		}
	}]);	

});
