import {intercept} from "./index";

test('base', () => {
  expect(intercept(281, 3)).toBe('281.000')
})
