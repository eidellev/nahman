import toStepsRight from '..';

test('toStepsRight', () => {
  expect(toStepsRight(['a', 'b', 'c'])).toEqual([['a', 'b', 'c'], ['b', 'c'], ['c']]);
});
