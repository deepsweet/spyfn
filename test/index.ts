import test from 'tape'

import { createSpy, getSpyCalls } from '../src/'

test('createSpy', (t) => {
  const spy = createSpy((props) => props)

  t.deepEqual(
    spy(1, 2, 3),
    { index: 0, args: [1, 2, 3] },
    'should pass index + args and return a result, call 1'
  )

  t.deepEqual(
    spy(4, 5, 6),
    { index: 1, args: [4, 5, 6] },
    'should pass index + args and return a result, call 2'
  )

  t.end()
})

test('getSpyCalls', (t) => {
  const spy = createSpy(() => {})

  spy()
  spy(1)

  t.deepEqual(
    getSpyCalls(spy),
    [[], [1]],
    'should return an array of call args array, call 1'
  )

  spy(1, 2, 3)
  spy()

  t.deepEqual(
    getSpyCalls(spy),
    [[], [1], [1, 2, 3], []],
    'should return an array of call args array, call 2'
  )

  t.end()
})
