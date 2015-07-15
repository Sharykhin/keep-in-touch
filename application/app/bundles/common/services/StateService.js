'use strict';


function StateService() {

    var _toState = {};

    function _setToState(toState) {
        _toState = toState;
    }

    function _getToState() {
        return _toState;
    }

    return {
        setToState: _setToState,
        getToState: _getToState
    };
}

module.exports = StateService;

