const Stack = require('../stack')
// describe function define a test suite, the second argument is callback, inside which we can define multiple tests
describe('My Stack', () => {
  let stack
  // this will give us an empty object to work with before each test, so we don't have to set it up manually at each one
  beforeEach(() => {
    stack = new Stack()
  })
  // test function or individual test call it, both would do the exact same thing. Use todo to get the test pass
  // it.todo('is create empty')
  it('is create empty', () => {
    // const stack = new Stack()
    // expection, make sure the code does what is expected. toBe is a matcher that will test the actual value to the correct value
    expect(stack.top).toBe(-1)
    // toBe matcher checks for referential equality between two objects, toEqual matcher checks value equality
    expect(stack.item).toEqual({})
  })

  it('can push item to the top', () => {
    // instead of setting up this new instance for every test, we can use helper function like beforeEach
    // const stack = new Stack()
    stack.push('aaa')
    expect(stack.top).toBe(0)
    expect(stack.peek).toBe('aaa')
  })

  it('can pop item from the top', () => {
    stack.push('aaa')
    expect(stack.pop()).toBe('aaa')
    expect(stack.peek).toBe(undefined)
  })
})
