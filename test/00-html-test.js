let test = require('tape')
let tiny = require('tiny-json-http')
let sandbox = require('@architect/architect').sandbox
let url = 'http://localhost:6666'

test('env', t => {
  t.plan(1)
  t.ok(sandbox, 'sandbox')
})

let end // saves a reference to be used later to shut down the sandbox
test('sandbox.start', async t => {
  t.plan(1)
  end = await sandbox.start()
  t.ok(end, 'sandbox started')
})

// callback style
test('get /', t => {
  t.plan(1)
  tiny.get({url},
  function win (err, result) {
    if (err) {
      t.fail(err, err)
    } else {
      t.ok(true, 'got result', console.log(result.body.toString().substring(0,50) + '...'))
    }
  })
})

// promise style
test('get /', t => {
  t.plan(1)
  tiny.get({url})
    .then(function win (result) {
      t.ok(true, 'got result', console.log(result.body.toString().substring(0,50) + '...'))
    })
    .catch(function fail (err) {
      t.fail(err, err)
    })
})

// async/await style
test('get /', async t => {
  t.plan(1)
  try {
    var result = await tiny.get({url})
    t.ok(true, 'got result',console.log(result.body.toString().substring(0,50) + '...'))
  } catch (e) {
    t.fail(e, e, console.log(e))
  }
})

test('sandbox.close', t=> {
  t.plan(1)
  end()
  t.pass('sandbox shut down')
})
