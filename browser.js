'use strict'

var supported = require('has-session-storage')
var window = require('global/window')

if (!supported) {
  throw new Error('Session storage is not supported')
}

module.exports = window.sessionStorage
