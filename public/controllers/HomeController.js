
  angular.module('myApp').controller("HomeCtrl", ['$scope','$http','$rootScope','myAppServices',function($scope,$http,$rootScope,myAppServices){
        $scope.business = [];
        $scope.emptyArray = true;
      $scope.search = function(){
        myAppServices.search('movies','chicago').then(function(data){
            $scope.business = data.data.businesses;
            if($scope.business.length  > 0){
               return $scope.emptyArray = false;
            }
            $scope.search.keyword ='';
            $scope.search.location = '';
        }).catch(function(error){
          return error;
        });
      }

  }]);
