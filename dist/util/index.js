"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("./uuid"));
exports.Uuid = uuid_1.default;
/**
 * Remove an element from an array
 */
function removeFromArray(array, element) {
    let index = array.indexOf(element);
    if (index !== -1) {
        return array.splice(index, 1);
    }
}
exports.removeFromArray = removeFromArray;
/**
 * Parse a string of Java arguments into an array
 */
function parseArgumentString(argString) {
    return argString.split(/\s+/);
}
exports.parseArgumentString = parseArgumentString;
/**
 * Convert a date string into a date object
 */
function stringToDate(dateString) {
    let date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return undefined;
    }
    return date;
}
exports.stringToDate = stringToDate;
/**
 * Convert a date to a string if the date exists
 */
function dateToString(date, useDefaultDate = false) {
    if (!date || isNaN(date.getTime()))
        return (useDefaultDate && defaultDate().toISOString()) || undefined;
    return date.toISOString();
}
exports.dateToString = dateToString;
/**
 * Get a default date object
 */
function defaultDate() {
    return new Date("1970-01-01T00:00:00.000Z");
}
exports.defaultDate = defaultDate;
//# sourceMappingURL=index.js.map