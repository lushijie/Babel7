# @babel/preset-env options

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

- 默认 false，不引入 babel-polyfill
- entry, 在入口引入整个polyfill， 需要在入口处书写 require("@babel/polyfill");
- usage, 依据代码中的实际使用按需引入（推荐）

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

默认 false，loose 模式是不太忠实于ES6语义的， es5 => es6 可能会出问题

## include

Array<string|RegExp>, defaults to [].

指定总是导入的插件

## exclude

Array<string|RegExp>, defaults to [].

指定总不导入的插件

## [更多配置](https://babeljs.io/docs/en/babel-preset-env#targets)