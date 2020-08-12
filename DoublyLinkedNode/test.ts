import {DList} from "./index"

test("simple list to doubly linked list:", () => {
    let o = [1, 2, 3];

    let d = new DList(o);

    expect(d.size).toEqual(3);
    expect(d.get(0)).toEqual(1);
    expect(d.get(1)).toEqual(2);
    expect(d.get(2)).toEqual(3);
    expect(d.get(3)).toEqual(null);
    expect(d.indexOf(5)).toEqual(-1);
})

