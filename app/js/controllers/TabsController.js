(function(){
    app.controller("TabsController", ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
        $scope.tabs = [
            {
                name: "About Me",
                navName: "app.about",
                icon: "person",
                isSelected: false
            },
            {
                name: "Resume",
                navName: "app.resume",
                icon: "description",
                isSelected: false
            },
            {
                name: "My Work",
                navName: "app.my-work",
                icon: "work",
                isSelected: false
            },
            {
                name: "Contact",
                navName: "app.contact",
                icon: "phone",
                isSelected: false
            }
        ];

        $scope.selectTab = function(selectedTab){
            _.forEach($scope.tabs, function(tab){
                tab.isSelected = _.isEqual(tab, selectedTab);
            });
        };

        function determineSelectedTab(){
            var selectedCount = 0;
            _.forEach($scope.tabs, function(tab){
                tab.isSelected = $state.is(tab.navName);
                if(tab.isSelected){
                    selectedCount++;
                }
            });
            if(selectedCount == 0 && $scope.tabs.length){
                $scope.tabs[0].isSelected = true;
            }
        }
        determineSelectedTab();

        //update tabs when navigation occurs
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){determineSelectedTab()});
    }]);
})();