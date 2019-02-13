import { flow, reverse, map, isNumber, isBoolean } from 'lodash/fp';
import toSteps from '../toSteps';

/**
 * Converts array to step array from right
 * @param  {*[]} arr  The array we would like to 'steppify'
 * @return {*[][]}    Steppified array
 */
export const toStepsRight = flow([
  arr => (isNumber(arr) || isBoolean(arr) ? [arr] : arr),
  reverse,
  toSteps,
  reverse,
  map(reverse),
]);
