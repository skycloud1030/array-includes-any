/*array_includes_any.js*/
const hasOwn = Object.prototype.hasOwnProperty;
export function array_includes_any(array1 = [], array2 = [], type = "any") {
  if (type === "equal" && array1.length !== array2.length) {
    return false;
  }
  // gen hash table
  let hash_table = {};
  for (let i = 0; i < array1.length; i++) {
    hash_table[array1[i]] = array1[i];
  }

  // compare state
  let contains = false;
  let contains_count = 0;
  for (let i = 0; i < array2.length; i++) {
    if (hasOwn.call(hash_table, array2[i])) {
      if (type === "equal") {
        contains_count++;
      } else {
        contains = true;
        break;
      }
    }
  }

  // return state
  if (type === "equal") {
    return (contains_count === array2.length);
  } else {
    return contains;
  }
};