import '@babel/polyfill';
import './index2';

'footbar'.includes('foo');
class Person {};

new Promise((resolve, reject) => {
  resolve();
}).finally(e => {
  console.log('index1 finally');
});

