angular.module('myApp.services',[]).factory('myAppServices',['$http',function($http){
      return {
        search : function(keyword,location,category){
          var promise = $http.get('/business', { params :{ term: keyword,location:location,category_filter: category }}).then(function(data){
            return data;
          }).catch(function(error){
            return error;
          });
          return promise;
        }
      }
}]);
