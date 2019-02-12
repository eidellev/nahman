import toSteps from '..';

test('toSteps', () => {
  expect(toSteps(['a', 'b', 'c'])).toEqual([['a'], ['a', 'b'], ['a', 'b', 'c']]);
});
