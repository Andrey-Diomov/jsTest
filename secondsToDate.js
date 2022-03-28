'use strict';
/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    let date = new Date(2020, 6, 1, 0, 0, 0);
    date.setSeconds(seconds);
    return date;
}

module.exports = secondsToDate;