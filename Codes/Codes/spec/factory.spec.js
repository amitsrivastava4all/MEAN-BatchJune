describe("factory Test Suite",()=>{
    var factory ;
    beforeEach(module("myapp"))  ; // ng-app="myapp" (HTML Level)
    beforeEach(inject(_myfactory_=>{
        factory = _myfactory_;
        console.log("Factory Injected ",factory);
    }));
    it("should add two numbers",()=>{
        var a= 100;
        var b = 200;
        var result = factory.add(a,b);
        expect(result).toBe(300);

    })
})