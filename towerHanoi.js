'use strict';

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    return Math.pow(2, disks) - 1;
}

module.exports = towerHanoi;