# browser-session-store [![Build Status](https://travis-ci.org/bendrucker/browser-session-store.svg?branch=master)](https://travis-ci.org/bendrucker/browser-session-store) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/browser-session-store.svg)](https://greenkeeper.io/)

> Async sessionStorage interface with a Node fallback

## Install

```
$ npm install --save browser-session-store
```


## Usage

```js
var session = require('browser-session-store')

session.put('foo', 'bar', function (err) {
  //=> err === null
  session.get('foo', function (err, value) {
    //=> err === null
    //=> value === 'bar'  
  })
})
```

## API

#### `session.get(key, callback)` -> `undefined`

Get data from the store. Parses as JSON.

##### key

*Required*  
Type: `string`

##### callback

*Required*  
Type: `function`  
Arguments: `err, value`

#### `session.put(key, value, [callback])` -> `undefined`

Add an item to the store (or overwrite an existing item). Data will be stringified as JSON.

##### key

*Required*  
Type: `string`

##### value

*Required*  
Type: `any`

##### callback

*Required*  
Type: `function`  
Arguments: `err`

#### `session.remove(key, [callback])` -> `undefined`

Remove an item.

##### key

*Required*  
Type: `string`

##### callback

*Required*  
Type: `function`  
Arguments: `err`

#### `session.clear([callback])` -> `undefined`

Clear the store.

##### callback

*Required*  
Type: `function`  
Arguments: `err`

## Related

* [browser-async-store](https://github.com/bendrucker/browser-async-store): the engine for browser-session-store
* [browser-store](https://github.com/bendrucker/browser-store): an API compatible alternative that uses `localStorage` when available

## License

MIT © [Ben Drucker](http://bendrucker.me)
