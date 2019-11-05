class romanNumerals {

    constructor(number){

        this.resultRomanNum = '';
        this.number = number;

        this.numerals = [
            {value: 40, numeral: 'XL'},
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];
    }

    /**
        * Append numeral to result
        * @param numeral A given numeral
    */
    appendNumeral (numeral){
        this.resultRomanNum += numeral;
    }

    /**
        * Compute into numeral
        * @param numeralItem A given numeral item
    */
    compute (numeralItem){
        while (this.number >= numeralItem.value) {
            this.appendNumeral(numeralItem.numeral);
            this.number -= numeralItem.value;
        }
    }

    /**
        * Convert the number with a numerals enumeration
        * @return {String} Roman numerals
    */
    convertToRoman () {
        this.numerals.forEach(item => {
            this.compute(item);
        });
    
        return this.resultRomanNum;
    };

}

module.exports = romanNumerals;