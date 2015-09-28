'use strict'

'use strict'

var supported = require('has-session-storage')
var window = require('global/window')
var shim = require('localStorage')

module.exports = supported ? window.sessionStorage : shim
