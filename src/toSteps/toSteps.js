import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

/**
 * Converts array to step array
 * @param  {*[]} arr  The array we would like to 'steppify'
 * @return {*[][]}    Steppified array
 */
export function toSteps(arr) {
  if (!arr) {
    return [];
  }

  let normalizedArr;

  if (!isArray(arr)) {
    if (isString(arr)) {
      normalizedArr = arr.split('');
    } else {
      throw new Error('Expected array or string!');
    }
  } else {
    normalizedArr = arr;
  }

  return normalizedArr.map((value, idx, context) => context.slice(0, idx + 1));
}
