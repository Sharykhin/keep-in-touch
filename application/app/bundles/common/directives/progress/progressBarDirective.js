'use strict';

progressBarDirective.$inject=['_'];

function progressBarDirective(_) {
	return {
			restrict: "E",
			scope: { 
		    	form: '=',
		    	model: '=',
		    	fields: '='
		    },	
			templateUrl: 'bundles/common/directives/progress/progressBar.html',		 
			link: function(scope, element, attrs) {
				var form = angular.element(document.querySelector('form[name="' + scope.form.$name + '"]'));
				scope.progress = 0;
				var fieldName;
				var names = [];
				var step = (100 / parseInt(scope.fields,10));
				
				form.on('change',function(event){					
					// Take field name
					fieldName = event.target.name;
					// Check if this field alredy exists in names array
					var isContains = _.contains(names,fieldName);
					// trim spaces of value
					var fieldValue = event.target.value.replace(/ /g,'');
					// Initialize if this field should be added to names array
					var isShouldBeAdded = false;					
					// Check if field was filled by data and it isn't in names
					if (fieldValue != '' && !isContains) {						
						// Mark this field as should be added to names
						isShouldBeAdded = true;
						// Increase data of progress bar
						scope.progress += step;
					} else if (fieldValue == '' && isContains) {						
						//Reduce value of progress bar if data of field was removed
						if (scope.progress != 0) {
							scope.progress -= step;
							var key = _.indexOf(names,fieldName);							
							delete names[key];
						}						
					}	
					// If field was filled it should be added to names
					if (!isContains && isShouldBeAdded) {
						names.push(fieldName);
					}
					scope.$digest();													
					
				});
				
			}
		}
}



module.exports = progressBarDirective;

	
