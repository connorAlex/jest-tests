import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./odinTests";

//capitalize
test('Returns a string with first character capitalized', () => {
    expect(capitalize("hello")).toBe("Hello");
});

//reverseString
test('Takes a string and returns it reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});

//calculator
test('Can add two numbers together', () => {
    expect(calculator.add(1,2)).toBe(3);
});
test('Can multiple two numbers together', () => {
    expect(calculator.multiply(2,3)).toBe(6);
});
test('Can subtract two numbers', () => {
    expect(calculator.subtract(5,3)).toBe(2);
});
test('Can Divide two numbers', () => {
    expect(calculator.divide(10,5)).toBe(2);
});

//caesarCipher
test("Takes string and shifts each character", () => {
    expect(caesarCipher("abc",1)).toBe("bcd");
})
test("can handle wrap arounds", () => {
    expect(caesarCipher("zzz",1)).toBe("aaa");
});
test("can handle different cases", () => {
    expect(caesarCipher("AbC",1)).toBe("BcD");
})
test("includes punctuation", () => {
    expect(caesarCipher("abc!",1)).toBe("bcd!");
});

//analyzeArray
test("returns object", () => {
    expect(analyzeArray([1,2,3])).toBeInstanceOf(Object);
});
test("computes accurate average", () => {
    expect(analyzeArray([1,2,3]).average).toBe(2);
});
test("returns accurate min", () => {
    expect(analyzeArray([1,2,3]).min).toBe(1);
});
test("returns accurate max", () => {
    expect(analyzeArray([1,2,3]).max).toBe(3);
});
test("returns accurate length", () => {
    expect(analyzeArray([1,2,3]).length).toBe(3);
})