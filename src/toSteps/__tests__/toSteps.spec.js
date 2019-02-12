import toSteps from '..';

describe('toSteps', () => {
  test('steppify array', () => {
    expect(toSteps(['a', 'b', 'c'])).toEqual([['a'], ['a', 'b'], ['a', 'b', 'c']]);
  });
});
