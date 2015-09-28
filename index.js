'use strict'

var storage = require('./storage')
var createStore = require('browser-async-store')

module.exports = createStore(storage)
