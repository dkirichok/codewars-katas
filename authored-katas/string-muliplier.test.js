const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(stringMultiplier(''), '');
    assert.strictEqual(stringMultiplier('2'), '2');
    assert.strictEqual(stringMultiplier('2()'), '2()');
    assert.strictEqual(stringMultiplier('2(a2())'), '2(a2())');
    assert.strictEqual(stringMultiplier('2(ab)'), 'abab');
    assert.strictEqual(stringMultiplier('2(a3(ab))'), 'aabababaababab');
    assert.strictEqual(stringMultiplier('3(2(2(a)))'), 'aaaaaaaaaaaa');
    assert.strictEqual(stringMultiplier('3(a2(b2(a3(c))))'), 'abacccacccbacccacccabacccacccbacccacccabacccacccbacccaccc');
    assert.strictEqual(stringMultiplier('2(ab)3(cd)'), 'ababcdcdcd');
    assert.strictEqual(stringMultiplier('1(foo)0(bar)3(baz)'), 'foobazbazbaz');
  });
});

function generateRandomString() {
  const length = Math.floor(Math.random() * 10) + 1;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return result;
}

function generateRandomInput() {
  const numRepetitions = Math.floor(Math.random() * 10) + 1;
  let result = '';
  for (let i = 0; i < numRepetitions; i++) {
    result += `${Math.floor(Math.random() * 10) + 1}(${generateRandomString()})`;
  }
  return result;
}

describe("Random tests", () => {
  for (let i = 0; i < 10; i++) {
    const input = generateRandomInput();
    const expectedOutput = input.replace(/\d+\(([a-z]+)\)/g, (_, group1) => group1.repeat(parseInt(_)));
    it(`Test ${i + 1}: should return ${expectedOutput} for input ${input}`, function() {
      const output = stringMultiplier(input);
      assert.strictEqual(output, expectedOutput);
    });
  }
});