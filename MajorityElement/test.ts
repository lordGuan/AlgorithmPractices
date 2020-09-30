import {majorityElement, majorityElement_2} from "./index";

test('majorityElement', () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
    expect(majorityElement([-1, 1, 1, 1, 2, 1])).toBe(1)
})


test('majorityElement', () => {
    expect(majorityElement_2([3, 2, 3])).toBe(3)
    expect(majorityElement_2([-1, 1, 1, 1, 2, 1])).toBe(1)
    expect(majorityElement_2([3,2,1])).toBe(-1)

})
