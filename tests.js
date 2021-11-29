// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('sayHello() should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('isFive(5) should return true when executed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('isFive("5") should return true when executed', function () {
        expect(isFive("5")).toBe(true);
    });
})
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('isEven(2) should return true when executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('isEven(-4) should return true when executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('isEven(3) should return false when executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('isEven("banana") should return false when executed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('isEven("8") should return true when executed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('isEven(Infinity) should return false when executed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('isEven(true) and isEven(false) should return false when executed', function () {
        expect(isEven(true)).toBe(false);
    } && function () {
        expect(isEven(false)).toBe(false);
    });
    it('isEven() should return false when executed', function () {
        expect(isEven()).toBe(false);
    });
})
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('isVowel("a") should return true when executed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('isVowel("A") should return true when executed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('isVowel("y") should return false when executed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('isVowel(4) should return false when executed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('isVowel(true) or isVowel(false) should both return false when executed', function () {
        expect(isVowel(true)).toBe(false);
    } && function () {
        expect(isVowel(false)).toBe(false);
    });
    it('isVowel("banana") should return false when executed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('isVowel() should return false when executed', function () {
        expect(isVowel()).toBe(false);
    });
})