import toSteps from '..';

describe('toSteps', () => {
  test('steppify array', () => {
    expect(toSteps(['a', 'b', 'c'])).toEqual([['a'], ['a', 'b'], ['a', 'b', 'c']]);
  });

  test('return empty when `arr` is falsey', () => {
    expect(toSteps()).toEqual([]);
    expect(toSteps(null)).toEqual([]);
    expect(toSteps(undefined)).toEqual([]);
  });

  test('treat string as array', () => {
    expect(toSteps('abc')).toEqual([['a'], ['a', 'b'], ['a', 'b', 'c']]);
  });

  test('will wrap input in array if not an array or string', () => {
    expect(toSteps(100)).toEqual([[100]]);
    expect(toSteps(true)).toEqual([[true]]);
  });
});
