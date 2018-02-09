/*array_includes_any.js*/
export function array_includes_any(array1, array2, type = "any") {
  if (type === "equal") {
    return shallowEqual(array1, array2);
  }

  if (is(array1, array2)) return true;

  if (
    typeof array1 !== "object" ||
    array2 === null ||
    typeof array2 !== "object" ||
    array2 === null
  ) {
    return false;
  }
  // gen hash table
  let objA = {};
  for (let i = 0; i < array1.length; i++) {
    objA[array1[i]] = array1[i];
  }
  // compare state
  for (let i = 0; i < array2.length; i++) {
    if (objA.hasOwnProperty(array2[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */
const hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
export default array_includes_any;
