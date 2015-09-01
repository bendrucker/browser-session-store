'use strict'

var storage = require('./store')
var createStore = require('browser-async-store')

module.exports = createStore(storage)
