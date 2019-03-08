# Babel7

## @babel/preset-env

inject polyfill by [browserslist](./browserslist/readme.md)

@babel/preset-env does not support stage-x plugins(stage0 idea-> stage4 Finished).

stage0 - stage3: @babel/plugin-proposal-


```js
"presets": [
    [
      "@babel/preset-env",
      {
      	"debug": false,
      	"loose": false,
        "useBuiltIns": false
      }
    ]
]
```

[detail doc @babel/preset-env](./babel-preset-env/readme.md)

## @babel/plugin-transform-runtime

```js
"plugins": [
  [
    "@babel/plugin-transform-runtime", {
      "corejs": false, // 默认， 需要安装 yarn add @babel/runtime core-js --save，可以指定使用 @babel/runtime-corejs2  {"corejs": 2}
      "helpers": true, // 默认, eg：class Person {} require 方式引入 _classCallCheck2
      "useESModules": false, // 默认， exports.__esModule  exports.default
    }
  ]
]
```

## @babel/register

All subsequent files required by node with the extensions .es6, .es, .jsx, .mjs, and .js will be transformed by Babel, but the file itself.

Polyfill not included

Your code should load the plugin/preset first if you need.

```js
require('@babel/register');
require('plugin.preset');
require('./index.js'); // export default in index.js would be parsed
```

[code demo @babel/register](./babel-register)