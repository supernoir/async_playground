'use strict'

function baz() {
  return new Promise((res) => setTimeout(res, 1000))
}

async function foo() {
  await baz()
  return 'foo completed.'
}

async function bar() {
  const value = await foo()
  console.log(value)
  return 'bar completed.'
}


bar()
  .then((value) => console.log(value))
