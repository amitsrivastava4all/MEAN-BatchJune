describe("Controller Test Suite",()=>{
    
    var $controller;
    var myfactory;
    var myscope = {};
    beforeEach(module("myapp"))  ; // ng-app="myapp" (HTML Level)
    beforeEach(inject(_$controller_=>{
       
        $controller = _$controller_;
        $controller("myctrl",{$scope:myscope},myfactory); //ng-controller="myctrl"
    }));
    it("should add two numbers",()=>{
       
        myscope.firstNumber = 100;
        myscope.secondNumber = 200;
        myscope.show();
        expect(myscope.result).toBe(300);

    });
    it("should add two numbers with factory",()=>{
       
       
        myscope.print();
        expect(myscope.result2).toBe(180);

    })
})