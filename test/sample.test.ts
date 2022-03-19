const add = (a: number, b: number) => a + b

test('sample', () => {
  const actual = add(1, 2)
  const expected = 3
  expect(actual).toEqual(expected)
})
