import { flow, reverse, map } from 'lodash/fp';
import toSteps from '../toSteps';

/**
 * Converts array to step array from right
 * @param  {*[]} arr  The array we would like to 'steppify'
 * @return {*[][]}    Steppified array
 */
export const toStepsRight = flow([reverse, toSteps, reverse, map(reverse)]);
