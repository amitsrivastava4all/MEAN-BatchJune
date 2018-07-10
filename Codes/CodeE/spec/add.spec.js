describe("this is add suite",()=>{
    it("should add two numbers",()=>{
        var one= 100;
        var two = 200;
        var result= add(one,two);
        expect(result).toBe(300);

    });
    it("should add one numbers",()=>{
        var one= 100;
       
        var result= add(one);
        expect(result).toBe(100);

    });
    it("should add no numbers",()=>{
        
       
        var result= add();
        expect(result).toBe(0);

    });
    it("should add two string numbers",()=>{
        
       
        var result= add("100","200");
        expect(result).toBe(300);

    });
})