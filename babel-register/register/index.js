require('@babel/register');

const  start = new Date();

const Point = require('./index2.js').default;
const p = new Point('12', '13');
console.log(p.getPosition());

const cost = new Date() - start;
console.info('Execution time: %dms', cost);
