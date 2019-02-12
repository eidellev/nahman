/**
 * Converts array to step array
 * @param  {*[]} arr  The array we would like to 'steppify'
 * @return {*[][]}    Steppified array
 */
export function toSteps(arr) {
  if (!arr) {
    return [];
  }

  return arr.map((value, idx, context) => {
    return context.slice(0, idx + 1);
  });
}
