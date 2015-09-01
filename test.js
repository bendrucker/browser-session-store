'use strict'

var test = require('tape')
var session = require('./')

test('write', function (t) {
  t.plan(1)
  session.put('foo', {bar: 'baz'}, function (err) {
    if (err) return t.end(err)
    t.pass('saved')
  })
})

test('read', function (t) {
  t.plan(1)
  session.get('foo', function (err, value) {
    if (err) return t.end(err)
    t.deepEqual(value, {bar: 'baz'})
  })
})

test('remove', function (t) {
  t.plan(1)
  session.remove('foo', function (err) {
    if (err) return t.end(err)
    session.get('foo', function (err, value) {
      if (err) return t.end(err)
      t.equal(value, null)
    })
  })
})
