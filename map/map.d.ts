// Type definitions for Map 0.9.0
// Project: https://github.com/gaku-sei/map
// Definitions by: Kévin Combriat
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

interface Iterable<T> {
  next(): {done: boolean, value: T};
}

declare class Map<T, U> {
    /**
     * The number of key/value pairs in the Map object.
     */
    size: number;

    /**
     * Removes all key/value pairs from the Map object.
     */
    clear(): void;

    /**
     * Removes any value associated to the key and returns the value that Map.prototype.has(value) would have previously returned.
     * Map.prototype.has(key) will return false afterwards.
     * @param key Key
     * @return true if the value has been removed, false otherwise.
     */
    delete(key: T): boolean;

    /**
     * Returns returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
     * @return an Iterable
     */
    entries(): Iterable<[T, U]>;

    /**
     * Calls callbackFn once for each key-value pair present in the Map object, in insertion order.
     * If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
     * @param callback The callback used to consume the Map
     * @param this? An optional parameter bound to this
     */
    forEach(callback: (value: U, key: T) => any): void;

    /**
     * Returns the value associated to the key, or undefined if there is none.
     * @param key Key.
     * @return The retrieved value
     */
    get(key: T): U | void;

    /**
     * Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
     * @param key Key.
     * @return Whether or not the key is associated to the Map.
     */
    has(key: T): boolean;

    /**
     * Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
     * @return an Iterable
     */
    keys(): Iterable<T>;

    /**
     * Sets the value for the key in the Map object. Returns the Map object.
     * @param key Key.
     * @param val Value.
     * @return The Map
     */
    set(key: T, value: U): Map<T, U>;

    /**
     * Returns a new Iterator object that contains the values for each element in the Map object in insertion order
     * @return an Iterable;
     */
    values(): Iterable<U>;
}
