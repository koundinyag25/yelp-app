angular.module('myApp', ['ui.router', 'myApp.services', 'ngMaterial', 'nemLogging', 'ui-leaflet','geolocation'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple', {
                'default': '600',
                'hue-2': '500',
                'hue-3': '100'
            }).accentPalette('green', {
                'default': 'A200'
            });

            $mdThemingProvider.theme('second').primaryPalette('grey', {
                'default': '600',
                'hue-2': '500',
                'hue-3': '50'

            }).accentPalette('green', {
                'default': 'A200'
            });

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});
