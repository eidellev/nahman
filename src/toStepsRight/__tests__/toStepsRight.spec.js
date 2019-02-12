import toStepsRight from '..';

describe('toStepsRight', () => {
  test('right steppify array', () => {
    expect(toStepsRight(['a', 'b', 'c'])).toEqual([['a', 'b', 'c'], ['b', 'c'], ['c']]);
  });

  test('return empty when `arr` is falsey', () => {
    expect(toStepsRight()).toEqual([]);
  });

  test('treat string as array', () => {
    expect(toStepsRight('abc')).toEqual([['a', 'b', 'c'], ['b', 'c'], ['c']]);
  });

  test('throw error if arr is niether array nor string', () => {
    expect(() => toStepsRight(100)).toThrow(new Error('Expected array or string!'));
  });
});
