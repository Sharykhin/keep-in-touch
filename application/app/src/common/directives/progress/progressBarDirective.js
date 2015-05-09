define([
	'../../module'
], function(module) {

	module.directive('progressBar',['_',function(_) {
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
				
				form.on('change',function(event){
					// Take field name
					feildName = event.target.name;
					// Check if this field alredy exists in names array
					var isContains = _.contains(names,feildName);
					// trim spaces of value
					var fieldValue = event.target.value.replace(/ /g,'');
					// Initialize if this field should be added to names array
					var isShouldBeAdded = false
					console.log(scope.progress);
					// Check if field was filled by data and it isn't in names
					if (fieldValue != '' && !isContains) {
						console.log('here 1');
						// Mark this field as should be added to names
						isShouldBeAdded = true;
						// Increase data of progress bar
						scope.progress += step;
					} else if (fieldValue == '' && isContains) {
						console.log('here 2');
						scope.progress -= step;
					}	

					if (!isContains && isShouldBeAdded) {
						names.push(feildName);
					}

					console.log(names);									
					
				});
				
			}
		}
	}]);	

});
