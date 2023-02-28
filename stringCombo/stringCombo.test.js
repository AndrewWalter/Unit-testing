const stringCombo = require("./stringCombo")

describe("StringCombo: Correct syntax", () =>{
    it("Passing in the word dog", () =>{
        expect(stringCombo("dog")).toEqual([ 'd', 'do', 'dog', 'o', 'og', 'g' ]);
    })
    it("Passing in a word with Numbers in it", () =>{
        expect(stringCombo("Area51")).toEqual([
            'A',    'Ar',    'Are',
            'Area', 'Area5', 'Area51',
            'r',    're',    'rea',
            'rea5', 'rea51', 'e',
            'ea',   'ea5',   'ea51',
            'a',    'a5',    'a51',
            '5',    '51',    '1'
          ]);
    })
    it("Passing in a word with a symbol in it", () =>{
        expect(stringCombo("four*")).toEqual([
            'f',    'fo',    'fou',
            'four', 'four*', 'o',
            'ou',   'our',   'our*',
            'u',    'ur',    'ur*',
            'r',    'r*',    '*'
          ])
    })
    it("Passing in a word with a symbol and a number", () =>{
        expect(stringCombo("5four*")).toEqual([
            '5',    '5f',    '5fo',
            '5fou', '5four', '5four*',
            'f',    'fo',    'fou',
            'four', 'four*', 'o',
            'ou',   'our',   'our*',
            'u',    'ur',    'ur*',
            'r',    'r*',    '*'
          ])
    })
})