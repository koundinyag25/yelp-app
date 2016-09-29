angular.module('myApp').controller("HomeCtrl", ['$scope', '$http', '$rootScope', 'myAppServices', 'leafletData', 'nemSimpleLogger',
    function($scope, $http, $rootScope, myAppServices, leafletData, $timeout) {
        $scope.business = [];
        $scope.emptyArray = true;
        $scope.name='';
        $scope.address ='';
        $scope.image='';
        leafletData.getMap().then(function(map) {
            map.invalidateSize(false);
        });
        $scope.markers = { };
        $scope.center = {
            lat: 0,
            lng: 0,
            message: ''
         };
        $scope.defaults = {
            scrollWheelZoom: false
          };



        $scope.search = function() {
            myAppServices.search($scope.search.keyword, $scope.search.location).then(function(data) {
                $scope.business = data.data.businesses;
                console.log('boop',$scope.business[0].location);
                $scope.name = $scope.business[0].name;
                $scope.address = $scope.business[0].location.display_address[0]+','+$scope.business[0].location.display_address[1] ;
                $scope.image = $scope.business[0].image_url;
                $scope.center={
                    lat: $scope.business[0].location.coordinate.latitude,
                    lng: $scope.business[0].location.coordinate.longitude,
                    zoom: 20
                  };
                $scope.markers = {
                  center: {
                    lat: $scope.business[0].location.coordinate.latitude,
                    lng: $scope.business[0].location.coordinate.longitude,
                    message: $scope.business[0].name + '</br>' + 'Address:'+ $scope.business[0].location.address[0]+', '+$scope.business[0].location.city+ ', '+ $scope.business[0].location.postal_code,
                    focus: true,
                    draggable: false
                  }
                };

                  console.log($scope.center);
                  console.log($scope.markers);
                  $scope.search.keyword = '';
                  $scope.search.location = '';
                if ($scope.business.length > 0) {
                    return $scope.emptyArray = false;
                }


            }).catch(function(error) {
                return error;
            });

        }

        $scope.selectItem = function(index){
          console.log($scope.business);
            console.log(index);
            console.log('the scope',$scope.business[index]);

            $scope.center={
                lat: $scope.business[index].location.coordinate.latitude,
                lng: $scope.business[index].location.coordinate.longitude,
                zoom: 15
              };
            $scope.markers = {
              center: {
                lat: $scope.business[index].location.coordinate.latitude,
                lng: $scope.business[index].location.coordinate.longitude,
                message: $scope.business[index].name + '</br>' + 'Address:'+ $scope.business[index].location.address[0]+', '+$scope.business[index].location.city+ ', '+ $scope.business[index].location.postal_code,
                focus: true,
                draggable: false
              }
            };


            $scope.name = $scope.business[index].name;
            $scope.address = $scope.business[index].location.display_address[0]+','+$scope.business[index].location.display_address[1];
            $scope.image = $scope.business[index].image_url;
        }


    }
]);
