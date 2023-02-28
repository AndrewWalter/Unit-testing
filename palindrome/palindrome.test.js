const palindrome = require("./palindrome");

describe("Palindromes: Correct syntax", () =>{
    it("passing palindrome", () =>{
        expect(palindrome("kayak")).toEqual("kayak is a palindrome");
    })
    it("Not a palindrome", () =>{
        expect(palindrome("Andrew")).toEqual("Andrew is not a palindrome");
    })
})
describe("Palindromes: Incorrect syntax", () =>{
    it("Number in string", ()=>{
        expect(palindrome("Andrew" + 5)).not.toEqual("Andrew is not a palindrome");
    })
    it("String ends unexpectedly", () =>{
        expect(palindrome("kay","ak")).not.toEqual("kayak is a palindrome")
    })
    it("String of numbers", () =>{
        expect(palindrome())
    })
})