"use strict";

var start = new Date();

var Point = require('./index2.js').default;

var p = new Point('12', '13');
console.log(p.getPosition());
var cost = new Date() - start;
console.info('Execution time: %dms', cost);