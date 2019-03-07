"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require('./index2.js');

[1, 2, 3].map(function (n) {
  return n + 1;
});
"foobar".includes("foo");

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    (0, _classCallCheck2.default)(this, Point);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2.default)(Point, [{
    key: "toString",
    value: function toString() {
      return "(".concat(this.x, ", ").concat(this.y, ")");
    }
  }]);
  return Point;
}();

var _default = Point;
exports.default = _default;
