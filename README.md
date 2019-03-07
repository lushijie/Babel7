# Babel7

## @babel/preset-env

@babel/preset-env does not support stage-x plugins(stage0 idea-> stage4 Finished).  @babel/plugin-proposal-

when specifying the esmodules target, browsers targets will be ignored.   （"targets": {  "esmodules": true  }）

[browserslist](./browserslist.md)

```js
"presets": [
    [
      "@babel/preset-env",
      {
      	"debug": false, // 默认， true 可以查看不同的浏览器应用了哪儿些 plugin，哪儿些文件用了哪儿些 polyfills
      	"loose": false, // 默认，loose 模式是不太忠实于ES6语义的， es5 => es6 可能会出问题
        "useBuiltIns": false, // 默认，entry：入口文件处写 import '@babel/polyfill', 编译过程中替换掉； usage: 按需引入代码中用到的polyfill, 推荐使用 usage
      }
    ]
]
```

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

对require的js、es、jsx、es6后缀的文件进行转码，且不会对当前文件进行转码（实时转码所以只适合开发阶段）

```js
require("@babel/register");
require("./index.js"); // index.js 含有 export default 可以解析
```
