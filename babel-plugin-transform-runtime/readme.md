# @babel/plugin-transform-runtime

yarn add @babel/runtime --save

yarn add @babel/plugin-transform-runtime --dev

Babel 转译后的代码要实现源代码同样的功能需要借助一些帮助函数， 例如帮助函数 _defineProperty 可能会重复出现在一些模块里，导致编译后的代码体积变大。

@babel/plugin-transform-runtime 就是为了解决这个问题，使用 require("@babel/runtime/helpers/*") 的方式解决，而不是 inline 方式。但是它不包含新的 ES API（如 Set） 和新的原型方法（如 Array.form ）。

```js
"plugins": [
  [
    "@babel/plugin-transform-runtime", {
      "corejs": false,
      "helpers": true,
      "useESModules": false,
    }
  ]
]
```

## corejs

默认 false，使用 @babel/runtime

{ "corejs": 2 }， 可以指定使用 @babel/runtime-corejs2 覆写掉 polyfill api 库

## helpers

默认 true， babel 诸如 createClass 使用 require 的方式引入，减小编译后的文件体积

false， 使用 inline 方式引入

## regenerator

默认 true， generator 函数使用 regenerator runtime 转化，不污染全局

## useESModules

默认 false

When enabled, the transform will use helpers that do not get run through @babel/plugin-transform-modules-commonjs. This allows for smaller builds in module systems like webpack, since it doesn't need to preserve commonjs semantics.