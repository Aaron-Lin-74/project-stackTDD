class Stack {
  constructor() {
    this.top = -1
    this.item = {}
  }
  get peek() {
    return this.item[this.top]
  }
  push(value) {
    this.top += 1
    this.item[this.top] = value
  }
  pop() {
    let popValue = this.peek
    this.top -= 1
    return popValue
  }
}

module.exports = Stack
