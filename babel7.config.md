# .babelrc

- yarn add  @babel/runtime core-js --save
- yarn add @babel/preset-env @babel/plugin-transform-runtime --dev

```js
{
"presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}

```