describe('test',function(){
  var scope = {};
  var ctrl;
  beforeEach(angular.mock.module('myApp'));
  beforeEach(angular.mock.inject(function($controller,$injector){
    ctrl = $controller('HomeCtrl',{ $scope : scope});
  }));
 it('should initilazie module',function(){


    var center = {
      lat : 0,
      lng: 0,
      message: ''
    }

    var business = []
    expect(scope.title).toBeDefined();
    expect(scope.business.length).toEqual(0);
    expect(scope.center).toEqual(center);

   });



   it('should search for the keywords ',function () {
    expect(scope.name).not.toBeNull();
   });


   it('should fail if the there is no data',function(){
     expect(scope.business.length).not.toBeGreaterThan(0);
   })
});
