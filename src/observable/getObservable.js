/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

const getGlobalThis = require('globalthis').getPolyfill
const provideSymbolObservable = require('symbol-observable/ponyfill').default

const symbolObservable = provideSymbolObservable(getGlobalThis())

export default function getObservable (o) { // eslint-disable-line complexity
  var obs = null
  if (o) {
  // Access foreign method only once
    var method = o[symbolObservable]
    if (typeof method === 'function') {
      obs = method.call(o)
      if (!(obs && typeof obs.subscribe === 'function')) {
        throw new TypeError('invalid observable ' + obs)
      }
    }
  }

  return obs
}
