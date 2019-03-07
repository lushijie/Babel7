# browserslist

使用 [browserslist](https://salsa.debian.org/js-team/node-browserslist) 的工具：

- autoprefixer
- bable-preset-env
- post-preset-env
- eslint-plugin-compat
- stylelint-unsupported-browser-features
- postcss-normalize

等

## 配置示例

#### package.json

```js
{
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}
```

#### .browserslistrc

```
# Browsers that we support

> 1%
Last 2 versions
IE 10 # sorry
```


## 配置规则

| 格式        | 说明         |
| ------------- |-------------|
| defaults | 默认配置> 0.5%, last 2 versions, Firefox ESR, not dead |
| > 0.1%      | 全球超过0.1%人使用的浏览器 |
| > 5% in US |指定国家使用率覆盖
| last 2 versions |所有浏览器兼容到最后两个版本根据CanIUse.com追踪的版本|
| Firefox ESR |火狐最新版本 |
| Firefox > 20 | 指定浏览器的版本范围 |
| not ie <=8 | 方向排除部分版本 |
| Firefox 12.1(IE 9) | 指定浏览器的兼容到指定版本 |
| unreleased versions | 所有浏览器的beta测试版本 |
| unreleased Chrome versions | 指定浏览器的测试版本 |
| since 2013 | 2013年之后发布的所有版本 |
| last 2 years| 最近两年发布的所有版本 |
| not dead | 全球使用率低于0.5%并且官方声明不在维护或者两年没有再更新的版本属于dead, 目前IE10、IE_Mob 已经dead |
| > 5% in my stats | [使用定制的浏览器统计数据](https://github.com/browserslist/browserslist#custom-usage-data)|

## 浏览器标识

大小写不敏感

- Android for Android WebView.
- Baidu for Baidu Browser.
- BlackBerry or bb for Blackberry browser.
- Chrome for Google Chrome.
- ChromeAndroid or and_chr for Chrome for Android
- Edge for Microsoft Edge.
- Electron for Electron framework. It will be converted to Chrome version.
- Explorer or ie for Internet Explorer.
- ExplorerMobile or ie_mob for Internet Explorer Mobile.
- Firefox or ff for Mozilla Firefox.
- FirefoxAndroid or and_ff for Firefox for Android.
- iOS or ios_saf for iOS Safari.
- Opera for Opera.
- OperaMini or op_mini for Opera Mini.
- OperaMobile or op_mob for Opera Mobile.
- QQAndroid or and_qq for QQ Browser for Android.
- Safari for desktop Safari.
- Samsung for Samsung Internet.
- UCAndroid or and_uc for UC Browser for Android.

## 环境差异化配置

Browserslist 将依赖BROWSERSLIST_ENV 或者 NODE_ENV查询浏览器版本范围。
如果两个环境变量都没有配置正确的查询条件，那么优先从 production 对应的配置项加载查询条件。

#### package.json

```js
"browserslist": {
  "production": [
    "> 1%",
    "ie 10"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version"
  ]
}
```

#### .browserslistrc

```
[production staging]
> 1%
ie 10

[development]
last 1 chrome version
last 1 firefox version
```

## 继承

#### package.json

```js
"browserslist": [
  "extends browserslist-config-mycompany",
  "extends @wordpress/browserslist-config",
  "extends browserslist-config-mycompany/desktop",
]
```

#### browserslist package content

```js
module.exports = [
  'last 2 versions',
  'ie 9'
]
```

## 验证

1. npx browserslist 打印出所有浏览器版本支出情况
2. [https://browserl.ist/](https://browserl.ist/)
