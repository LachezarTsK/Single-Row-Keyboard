
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 96;

    const charToKeyboardIndex = new Array(this.ALPHABET_SIZE);
    for (let i = 0; i < keyboard.length; ++i) {
        charToKeyboardIndex[keyboard.codePointAt(i) - ASCII_SMALL_CASE_A] = i;
    }

    let previous = word.codePointAt(0) - ASCII_SMALL_CASE_A;
    let timeToType = charToKeyboardIndex[previous];

    for (let i = 0; i < word.length; ++i) {
        let current = word.codePointAt(i) - ASCII_SMALL_CASE_A;
        timeToType += Math.abs(charToKeyboardIndex[current] - charToKeyboardIndex[previous]);
        previous = current;
    }

    return timeToType;
};
