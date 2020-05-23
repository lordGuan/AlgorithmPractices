const {assert} = require('chai')
const {duplicateEncode} = require('./index.js')

describe("example", function() {
  it("test", function() {
    assert.strictEqual(duplicateEncode("din"),"din");
    // assert.strictEqual(duplicateEncode("recede"),"()()()");
    // assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    // assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});