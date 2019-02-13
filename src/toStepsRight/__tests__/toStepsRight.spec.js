import toStepsRight from '..';

describe('toStepsRight', () => {
  test('right steppify array', () => {
    expect(toStepsRight(['a', 'b', 'c'])).toEqual([['a', 'b', 'c'], ['b', 'c'], ['c']]);
  });

  test('return empty when `arr` is null or undefined', () => {
    expect(toStepsRight()).toEqual([]);
    expect(toStepsRight(null)).toEqual([]);
    expect(toStepsRight(undefined)).toEqual([]);
  });

  test('treat string as array', () => {
    expect(toStepsRight('abc')).toEqual([['a', 'b', 'c'], ['b', 'c'], ['c']]);
  });

  test('will wrap input in array if not an array or string', () => {
    expect(toStepsRight(100)).toEqual([[100]]);
    expect(toStepsRight(true)).toEqual([[true]]);
  });
});
