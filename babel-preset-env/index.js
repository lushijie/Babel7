import '@babel/polyfill';
// import _ from 'lodash'; unused 引入也会增加包的体积
import './index2'; // entry 方式 如果 index2 也包含@babel/polyfill，体积会变大（引用）

'footbar'.includes('foo');
class Person {};

new Promise((resolve, reject) => {
  resolve();
}).finally(e => {
  console.log('index1 finally');
});

