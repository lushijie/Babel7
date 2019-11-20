const start = new Date();
require('@babel/polyfill');// 新语法class Person {};// 新 API
const a = new Set();

// 新的原型方法
'footbar'.includes('foo');
new Promise((resolve, reject) => {
  resolve();
}).finally(e => {
  console.log('index1 finally');
});

const cost = new Date() - start;
console.info('Execution time: %dms', cost);

