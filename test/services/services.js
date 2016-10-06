describe("myAppService", function(){
  var myAppServices, httpBackend;

  beforeEach(module('myApp'));
  beforeEach(inject(function(_myAppServices_, $httpBackend){
    myAppServices = _myAppServices_ ;
    httpBackend = $httpBackend;
  }));

  it('should return me an array of arrays',function(){
    var keyword,location,category_filter;
     httpBackend.whenGET('/business', { params : { keyword : 'a' , location : 'b', category_filter: 'c'} }).respond([
         { name : 'something' , place : 'chennai'} ,{ name : 'something else', place: 'banglore'}
       ]);
  myAppServices.search(keyword,location,category_filter).then(function(name){
    expect(name).toEqual(['something'],['something else']);
  });

  });




});
