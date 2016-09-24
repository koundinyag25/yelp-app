angular.module('myApp.services',[]).factory('myAppServices',['$http','$rootScope',function($http,$rootScope){
      return {
        search : function(keyword,location){
          var promise = $http.get('/business', { params :{ term: keyword,location:location }}).then(function(data){
            return data;
          }).catch(function(error){
            return error;
          });
          return promise;
        }
      }
}]);
