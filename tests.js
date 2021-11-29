// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('sayHello() should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});