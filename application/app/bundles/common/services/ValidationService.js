'use strict';

function ValidationService() {
    var patterns = {};

    patterns.email = new RegExp('^[a-zA-Z0-9_\.]{1,20}@[a-zA-Z0-9_]{1,20}\.[a-z]{2,4}$');

    var messager = {
        'required': function (rule, message) {
            return message || 'This field is required';
        },
        'pattern': function (rule, message) {
            rule = angular.isDefined(rule) ? rule : {
                pattern: 'value'
            };
            return message || 'Enter valid ' + rule.pattern;
        },
        'minlength': function (rule, message) {
            rule = angular.isDefined(rule) ? rule : {
                minlength: 8
            };
            return message || 'The field should contain at least ' + rule.minlength + ' characters';
        },
        'compareTo': function (rule, message) {
            rule = angular.isDefined(rule) ? rule : {
                compareTo: 'password'
            };
            return message || 'Confirm the ' + rule.compareTo;
        },
        'email': function (rule, message) {
            return message || 'Enter valid email';
        },
        'serverValidation': function (rule, message) {
            return message || 'Enter valid value';
        }
    };


    function getErrors(error, rule, message) {
        if (angular.isDefined(error)) {
            var errorMessage;
            angular.forEach(error, function (value, key) {
                var message = message || ((key === 'serverValidation') ? value : undefined) || undefined;
                errorMessage = messager[key](rule, message);
            });
            return errorMessage;
        }
    }

    function compare(form, errors) {

        angular.forEach(errors, function (value, key) {
            var fieldRule = key.split('.');
            var fieldName = fieldRule[0].toLowerCase();
            if (angular.isDefined(form[fieldName])) {
                var elem = form[fieldName];
                elem.$invalid = true;
                elem.$error = {
                    pattern: true,
                    serverValidation: value
                };
            }
        });

    }

    return {
        patterns: patterns,
        getErrors: getErrors,
        compare: compare
    };
}

module.exports = ValidationService;

