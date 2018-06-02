app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/partials/menu.html',
            // controller: 'menuController'
        })
        .state('app.about', {
            url: '/about',
            views: {
                'tabContent': {
                    templateUrl: 'app/partials/about.html',
                    // controller: 'dashboardController'
                }
            }
        })
        .state('app.resume', {
            url: '/resume',
            views: {
                'tabContent': {
                    templateUrl: 'app/partials/resume.html',
                    controller: 'ResumeController'
                }
            }
        })
        .state('app.my-work', {
            url: '/work',
            views: {
                'tabContent': {
                    templateUrl: 'app/partials/my-work.html',
                    // controller: 'dashboardController'
                }
            }
        })
        .state('app.contact', {
            url: '/contact',
            views: {
                'tabContent': {
                    templateUrl: 'app/partials/contact.html',
                    controller: 'ContactController'
                }
            }
        });
        
    //For some reason, we get an infinite loop if we set a default url
    //$urlRouterProvider.otherwise('/login');
}]);
