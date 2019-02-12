import toSteps from '..';

describe('toSteps', () => {
  test('steppify array', () => {
    expect(toSteps(['a', 'b', 'c'])).toEqual([['a'], ['a', 'b'], ['a', 'b', 'c']]);
  });

  test('return empty when `arr` is falsey', () => {
    expect(toSteps()).toEqual([]);
  });

  test('treat string as array', () => {
    expect(toSteps('abc')).toEqual([['a'], ['a', 'b'], ['a', 'b', 'c']]);
  });

  test('throw error if arr is niether array nor string', () => {
    expect(() => toSteps(100)).toThrow(new Error('Expected array or string!'));
  });
});
