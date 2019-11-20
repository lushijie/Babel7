// import '@babel/polyfill';

// import './index2'; // entry 方式 如果 index2 也包含@babel/polyfill，体积会变大（引用）

// 新语法
class Person {};

// 新API
const s = new Set(['1', '1']);

// 新方法
'footbar'.includes('foo');
new Promise((resolve, reject) => {
  resolve();
}).finally(e => {
  console.log('index1 finally');
});

