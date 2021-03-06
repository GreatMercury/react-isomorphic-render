// Helpers

exports.meta  = require('./build/meta').default

// Redux

exports.preload       = require('./build/redux/preload').default
exports.onPageLoaded  = require('./build/redux/onPageLoaded').default

exports.render        = require('./build/redux/client/client').default
exports.getState      = require('./build/redux/client/client').getState
exports.getHttpClient = require('./build/redux/client/client').getHttpClient

var preloading_middleware = require('./build/redux/middleware/preload')

exports.Preload_started      = preloading_middleware.Preload_started
exports.PRELOAD_STARTED      = exports.Preload_started
exports.Preload_finished     = preloading_middleware.Preload_finished
exports.PRELOAD_FINISHED     = exports.Preload_finished
exports.Preload_failed       = preloading_middleware.Preload_failed
exports.PRELOAD_FAILED       = exports.Preload_failed
exports.Preload_method_name  = preloading_middleware.Preload_method_name
exports.PRELOAD_METHOD_NAME  = exports.Preload_method_name
exports.Preload_options_name = preloading_middleware.Preload_options_name
exports.PRELOAD_OPTIONS_NAME = exports.Preload_options_name

exports.redux_module = require('./build/redux/redux module').default
exports.reduxModule  = exports.redux_module

exports.underscoredToCamelCase = require('./build/redux/naming').underscoredToCamelCase

exports.event_name = require('./build/redux/naming').event_name
exports.eventName  = exports.event_name

exports.goto       = require('./build/redux/actions').goto_action
exports.redirect   = require('./build/redux/actions').redirect_action
exports.load_state = require('./build/redux/actions').load_state_action
exports.loadState  = exports.load_state

exports.PRELOAD    = require('./build/redux/actions').Preload
exports.LoadState  = require('./build/redux/actions').LoadState
exports.LOAD_STATE = exports.LoadState  
exports.GoTo       = require('./build/redux/actions').GoTo
exports.GO_TO      = exports.GoTo  
exports.Redirect   = require('./build/redux/actions').Redirect
exports.REDIRECT   = exports.Redirect
exports.Navigated  = require('./build/redux/actions').Navigated
exports.NAVIGATED  = exports.Navigated

exports.Link = require('./build/redux/Link').default
exports.IndexLink = require('./build/redux/IndexLink').default

exports.websocket = require('./build/redux/client/websocket').default

exports.get_cookie = require('./build/client/cookies').get_cookie
exports.getCookie  = exports.get_cookie

exports.replace_location = require('./build/react-router/location').replace_location
exports.replaceLocation  = exports.replace_location

exports.push_location = require('./build/react-router/location').push_location
exports.pushLocation  = exports.push_location