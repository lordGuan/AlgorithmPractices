import {find} from "./index"

test("zero set :", () => {
    expect(JSON.stringify(find([-2, 3, 5, 0, -1, 2, 1])))
        .toBe(JSON.stringify([[-1, 3, -2], [2, 0, -2], [1, -1, 0]]))
})
