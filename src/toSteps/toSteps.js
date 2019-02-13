import { isArray, isString } from 'lodash';

/**
 * Converts array to step array
 * @param  {*[]} arr  The array we would like to 'steppify'
 * @return {*[][]}    Steppified array
 */
export function toSteps(arr) {
  if (arr === undefined || arr === null) {
    return [];
  }

  let normalizedArr;

  if (!isArray(arr)) {
    if (isString(arr)) {
      normalizedArr = arr.split('');
    } else {
      normalizedArr = [arr];
    }
  } else {
    normalizedArr = arr;
  }

  return normalizedArr.map((value, idx, context) => context.slice(0, idx + 1));
}
