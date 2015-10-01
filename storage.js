'use strict'

'use strict'

var supported = require('has-session-storage')
var window = require('global/window')
var Storage = require('storage-sham')

module.exports = supported ? window.sessionStorage : Storage()
