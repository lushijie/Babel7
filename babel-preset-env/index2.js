import '@babel/polyfill';

new Promise((resolve, reject) => {
  resolve();
}).finally(e => {
  console.log('index2 finally');
});
