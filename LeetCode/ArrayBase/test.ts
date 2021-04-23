import {pivotIndex} from "./index"

test('default', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
})
