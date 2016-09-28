angular.module('myApp').controller("HomeCtrl", ['$scope', '$http', '$rootScope', 'myAppServices', 'leafletData', 'nemSimpleLogger',
    function($scope, $http, $rootScope, myAppServices, leafletData, $timeout) {
        $scope.business = [];
        $scope.emptyArray = true;
        leafletData.getMap().then(function(map) {
            map.invalidateSize(false);
        });
        $scope.center = {
            lat: -33.8830,
            lng: 151.2166,
            zoom: 20
        };
        $scope.defaults = {
            scrollWheelZoom: false
        };



        $scope.search = function() {
            myAppServices.search($scope.search.keyword, $scope.search.location).then(function(data) {
                $scope.business = data.data.businesses;

                if ($scope.business.length > 0) {
                    return $scope.emptyArray = false;
                }

                console.log($scope.business, data);
                // angular.extend($scope,{
                //   center :{
                //     lat: -33.8830,
                //     lng: 151.2166,
                //     zoom:20
                //   },
                //   defaults:{
                //     scrollWheelZoom: false
                //   }
                // });
                $scope.search.keyword = '';
                $scope.search.location = '';
            }).catch(function(error) {
                return error;
            });

        }


    }
]);
