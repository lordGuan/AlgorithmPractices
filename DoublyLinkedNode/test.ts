import {DList} from "./index"

test("simple list to doubly linked list:", () => {
  let o = [1, 2, 3];
  
  let d = new DList(o);
  
  expect(d.size).toEqual(3);
  expect(d.get(2)).toEqual(3);
})

