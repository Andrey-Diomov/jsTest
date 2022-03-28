'use strict';

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */

function repeatingLitters(string) {
    let result = '';
    let letter;

    for (var i = 0; i < string.length; i++) {
        letter = string.charAt(i);
        if (string.split(letter).length > 2) {
            result += letter;
        } else {
            result += letter.repeat(2);
        }
    }
    return result;
}



/* second solution, also works

function repeatingLitters(string) {
    let result = '';
    let arr = string.split('');

    arr.forEach(element => {
        if (arr.filter(x => x == element).length < 2) {
            result += element.repeat(2);
        } else {
            result += element;
        }
    });
    return result;
}
*/

module.exports = repeatingLitters;