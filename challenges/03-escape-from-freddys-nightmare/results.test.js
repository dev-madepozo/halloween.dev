const findSafestPath = require("./solution")

describe("Test Challenge #3: 🛌 Escape from Freddy's nightmare", () => {
  test("Test #1: the return type should be a number", () => {
    expect(typeof findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe("number")
  })

  test("Test #2: the return value should be 7", () => {
    expect(findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7)
  })

  test("Test #3: the return value should be 11", () => {
    expect(findSafestPath([[5, 9], [4, 2]])).toBe(11)
  })

  test("Test #4: the return value should be 5", () => {
    expect(findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toBe(5)
  })

  test("Test #5: the return value should be 10", () => {
    expect(findSafestPath([[1, 2, 3], [3, 2, 1], [4, 4, 4]])).toBe(10)
  })

  test("Test #6: the return value should be 20", () => {
    expect(findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]])).toBe(20)
  })

  test("Test #7: the return value should be 20", () => {
    expect(findSafestPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(21)
  })
})