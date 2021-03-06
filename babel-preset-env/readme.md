# @babel/preset-env

yarn add @babel/preset-env --dev

yarn add core-js --save

inject polyfill by [browserslist](./browserslist/readme.md)

@babel/preset-env does not support stage-x plugins(stage0 idea-> stage4 Finished).

stage0 - stage3: @babel/plugin-proposal-

包含新的ES API (如Set)和新增的原型方法（如Array.form）。

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "last 1 version, > 0.1%, not dead",
        "debug": false,
        "useBuiltIns": "usage",
        "modules": "auto"
        // ...
      }
    ]
  ]
}
```
## useBuiltIns

- 默认 false，不自动引入 babel-polyfill，require("@babel/polyfill") 全量引入，不参考 targets 配置
- entry, 在入口引入整个polyfill， 需要在`入口处`书写 require("@babel/polyfill")，参考 targets 配置
- usage, 依据代码中的实际使用按需引入（推荐）, yarn add core-js --save，参考 targets 配置

## debug

默认 false, true 打开调试

## targets

如果不指定，则使用 .browserslistrc（调试 targets 显示的是 浏览器 >= 版本号，并没有列出所有浏览器）

一般建议使用 .browserslistrc

targets 也可以为一个对象

```js
"targets": {
  esmodules, // <script type="module"></script>
  node,
  safari,
  browsers, // browserslistrc 表示
}
```

显示指定了 targets 之后不再读取 .browserslistrc 的配置

## spec

启用更符合规范的转换，但速度会更慢，默认为 false

## modules

"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto".

Enable transformation of ES6 module syntax to another module type.

## loose

默认 false，

true，代码更简单，但是loose 模式是不太忠实于ES6语义的， es5 => es6 可能会出问题

## include

Array<string|RegExp>, defaults to [].

指定总是导入的插件

## exclude

Array<string|RegExp>, defaults to [].

指定总不导入的插件

[更多配置](https://babeljs.io/docs/en/babel-preset-env#targets)
