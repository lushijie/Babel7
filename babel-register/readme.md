
# @babel/register

All subsequent files required by node with the extensions .es6, .es, .jsx, .mjs, and .js will be transformed by Babel, but the file itself.

Polyfill not included

Your code should load the plugin/preset first if you need.

```js
require('@babel/register');
require('plugin.preset');
require('./index.js'); // export default in index.js would be parsed
```