//declare our angularJS app on the global scope:
app = angular.module('app', ['ngAnimate', 'ui.router'])
    .constant("CONFIG", {
        version: 0.01
    })

    .run(function ($state, $rootScope) {
        //we can do any setup here if we need to.
        $state.go('app.about');
    });
