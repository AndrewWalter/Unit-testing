const alphabet_order = require("./alphabetical")
describe("alphabet_order: Correct syntax", () =>{
    it("Pass a word with no capitals", () =>{
        expect(alphabet_order("webmaster")).toEqual("abeemrstw");
    })
    it("Pass a word that starts with a capital", ()=>{
        expect(alphabet_order("Andrew")).toEqual("adenrw");
    })
    it("Pass a word with a capital in the middle", ()=>{
        expect(alphabet_order("lowerCase")).toEqual("aceelorsw");
    })
    it("Pass a phrase with a capitals", ()=>{
        expect(alphabet_order("Unit Testing")).toEqual("egiinnstttu");
    })
})