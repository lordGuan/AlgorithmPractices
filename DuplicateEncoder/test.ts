import {duplicateEncode} from "./index";

test("duplicateEncode:", () => {
  expect(duplicateEncode("aab")).toBe("))(")
})