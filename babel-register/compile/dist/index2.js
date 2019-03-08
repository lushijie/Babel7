"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    (0, _classCallCheck2.default)(this, Point);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2.default)(Point, [{
    key: "getPosition",
    value: function getPosition() {
      return "(".concat(this.x, ", ").concat(this.y, ")");
    }
  }]);
  return Point;
}();

exports.default = Point;