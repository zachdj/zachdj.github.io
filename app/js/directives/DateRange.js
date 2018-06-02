app.directive('dateRange', [ function(){
    return{
        restrict:'E',
        scope: {
            start: '=',
            end: '='
        },
        templateUrl: "app/js/directives/date-range.html",
        controller: function($scope){
            $scope.startFormatted = $scope.start;
            $scope.endFormatted = $scope.end;

            if($scope.end && $scope.end >= (new Date())){
                $scope.endFormatted = null; //this will cause it to display "Present"
            }
        }
        // link:function(scope,elem,attrs){
        //     $timeout(function(){
        //         elem.sideNav({
        //             //menuWidth: 300, // Default is 240
        //             edge: 'left', // Choose the horizontal origin
        //             closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        //         });
        //     },0)
        // }
    }
}]);