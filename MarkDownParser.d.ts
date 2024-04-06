export let helper: {};
export let extensions: {};
/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {markDownParser}
 */
export function setOption(key: string, value: any): any;
/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
export function getOption(key: string): any;
/**
 * Get the global options
 * @static
 * @returns {{}}
 */
export function getOptions(): {};
/**
 * Reset global options to the default values
 * @static
 */
export function resetOptions(): void;
/**
 * Set the flavor markDownParser should use as default
 * @param {string} name
 */
export function setFlavor(name: string): void;
/**
 * Get the currently set flavor
 * @returns {string}
 */
export function getFlavor(): string;
/**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */
export function getFlavorOptions(name: string): {};
/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
export function getDefaultOptions(simple?: boolean): {};
/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
export function subParser(name: string, func?: Function): any;
/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|object[]|function=} ext
 * @returns {*}
 */
export function extension(name: string, ext?: any): any;
/**
 * Gets all extensions registered
 * @returns {{}}
 */
export function getAllExtensions(): {};
/**
 * Remove an extension
 * @param {string} name
 */
export function removeExtension(name: string): void;
/**
 * Removes all extensions
 */
export function resetExtensions(): void;
/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
export function validateExtension(ext: any): boolean;
/**
 * markDownParser parser class
 * @class
 * @param {object} [converterOptions]
 * @returns {parser}
 */
export function parser(converterOptions?: any): string;
