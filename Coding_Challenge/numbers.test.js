/*
 * For testing the application Jest will be used
 * There are 12 tests in total which will test converting numbers to words.
 */
const sayNumber = require("./Numbers");

console.log(sayNumber(234))
console.log("test")
//* Less then 100
test("7 in words", () => {
    expect(sayNumber(7)).toBe("seven")
})

//* Less then 100
test("11 in words", () => {
    expect(sayNumber(11)).toBe("eleven")
})

//* Less then 1000
test("377 in words", () => {
    expect(sayNumber(377)).toBe("three hundred and seventy seven")
})

test("780 in words", () => {
    expect(sayNumber(780)).toBe("seven hundred and eighty")
})

//* Less the 100 thousand
test("21346 in words", () => {
    expect(sayNumber(21346)).toBe("twenty, one thousand three hundred and forty six")
})

test("33000 in words", () => {
    expect(sayNumber(33000)).toBe("thirty three thousand")
})

//* Less then 1 million
test("157000 in words", () => {
    expect(sayNumber(157000)).toBe("one hundred and fifty seven thousand")
})

test("257468 in words", () => {
    expect(sayNumber(257468)).toBe("two hundred and fifty seven thousand, four hundred and sixty eight")
})

test("162435 in words", () => {
    expect(sayNumber(162435)).toBe("one hundred and sixty two thousand, four hundred and thirty five")
})

//* Less the 10 million
test("1236987 in words", () => {
    expect(sayNumber(1236987)).toBe("one million, two hundred and thirty six thousand, nine hundred and eighty seven")
})

//* Less the 100 million
test("97684256 in words", () => {
    expect(sayNumber(97684256)).toBe("ninety seven million, six hundred and eighty four thousand, two hundred and fifty six")
})

//* Less then or equal to 999 999 999

test("247568927 in words", () => {
    expect(sayNumber(247568927)).toBe("two hundred and forty seven million, five hundred and sixty eight thousand, nine hundred and twenty seven")
})
