import Uuid from "./uuid";
/**
 * Remove an element from an array
 */
export declare function removeFromArray<T>(array: Array<T>, element: T): T[] | undefined;
/**
 * Parse a string of Java arguments into an array
 */
export declare function parseArgumentString(argString: string): Array<string>;
/**
 * Convert a date string into a date object
 */
export declare function stringToDate(dateString: string): Date | undefined;
/**
 * Convert a date to a string if the date exists
 */
export declare function dateToString(date?: Date, useDefaultDate?: boolean): string | undefined;
/**
 * Get a default date object
 */
export declare function defaultDate(): Date;
export { Uuid };
