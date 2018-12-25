import Uuid from "./uuid";

/**
 * Remove an element from an array
 */
export function removeFromArray<T>(array: Array<T>, element: T) {
	let index = array.indexOf(element);
	if (index !== -1) {
		return array.splice(index, 1);
	}
}

/**
 * Parse a string of Java arguments into an array
 */
export function parseArgumentString (argString: string): Array<string> {
	return argString.split(/\s+/);
}

/**
 * Convert a date string into a date object
 */
export function stringToDate (dateString: string) {
	let date = new Date(dateString);
	if (isNaN(date.getTime())) {
		return undefined;
	}
	return date;
}

/**
 * Convert a date to a string if the date exists
 */
export function dateToString (date?: Date, useDefaultDate: boolean = false) {
	if (!date || isNaN(date.getTime()))
		return (useDefaultDate && defaultDate().toISOString()) || undefined;
	return date.toISOString();
}

/**
 * Get a default date object
 */
export function defaultDate () {
	return new Date("1970-01-01T00:00:00.000Z");
}

export {
	Uuid
}
