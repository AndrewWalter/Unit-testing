const reverse = require("./reverseNum")

describe("Int tests", () =>{
    it("passing Int", () =>{
        expect(reverse(32243)).toEqual(34223);
    })
    it("failing Int", () =>{
        expect(reverse(32243)).not.toEqual(32243);
    })
})