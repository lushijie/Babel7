# .babelrc

- yarn add  @babel/runtime core-js --save
- yarn add @babel/preset-env @babel/plugin-transform-runtime --dev

根据实际情况制定适合自己的 .browerslistrc 或者 @babel/preset-env/targets 配置项

```js
{
"presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ],
    "minify"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}

```
