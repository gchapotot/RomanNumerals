const romanNumerals = require('../src/romanNumerals');

describe('Roman Numerals Test', () => {
    test('Convert 1 in roman numerals', () => {
        const numeral = new romanNumerals(1);
        var result = numeral.convertToRoman();

        expect(result).toBe('I');
     });

     test('Convert 2 in roman numerals', () => {
        const numeral = new romanNumerals(2);
        var result = numeral.convertToRoman();

        expect(result).toBe('II');
     });

     test('Convert 10 in roman numerals', () => {
        const numeral = new romanNumerals(10);
        var result = numeral.convertToRoman();

        expect(result).toBe('X');
     });

     test('Convert 20 in roman numerals', () => {
        const numeral = new romanNumerals(20);
        var result = numeral.convertToRoman();

        expect(result).toBe('XX');
     });

     test('Convert 11 in roman numerals', () => {
        const numeral = new romanNumerals(11);
        var result = numeral.convertToRoman();

        expect(result).toBe('XI');
     });

     test('Convert 5 in roman numerals', () => {
        const numeral = new romanNumerals(5);
        var result = numeral.convertToRoman();

        expect(result).toBe('V');
     });

     test('Convert 4 in roman numerals', () => {
        const numeral = new romanNumerals(4);
        var result = numeral.convertToRoman();

        expect(result).toBe('IV');
     });

     test('Convert 9 in roman numerals', () => {
        const numeral = new romanNumerals(9);
        var result = numeral.convertToRoman();

        expect(result).toBe('IX');
     });

     test('Convert 40 in roman numerals', () => {
        const numeral = new romanNumerals(40);
        var result = numeral.convertToRoman();

        expect(result).toBe('XL');
     });

     test('Convert 48 in roman numerals', () => {
        const numeral = new romanNumerals(48);
        var result = numeral.convertToRoman();

        expect(result).toBe('XLVIII');
     });
});