global.console = { log: jest.fn() }
const index = require("./index");

test("part one - test", () => {
  expect(index.partOne(index.testInput)).toBe(95437);
})

test("part one", () => {
  expect(index.partOne(index.input)).toBe(1886043);
})

test("part two - test", () => {
  expect(index.partTwo(index.testInput)).toBe(24933642);
})

test("part two", () => {
  expect(index.partTwo(index.input)).toBe(3842121);
})

