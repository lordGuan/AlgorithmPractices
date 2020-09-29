import {majorityElement} from "./index";

test('majorityElement', () => {
    expect(majorityElement([3,2,3])).toBe(3)
    expect(majorityElement([-1,1,1,1,2,1])).toBe(1)
})
