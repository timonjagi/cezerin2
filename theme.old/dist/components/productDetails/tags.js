"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tags = function Tags(_ref) {
  var tags = _ref.tags;

  if (tags && tags.length > 0) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tags"
    }, tags.map(function (tag, index) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: index,
        className: "tag"
      }, tag);
    }));
  } else {
    return null;
  }
};

var _default = Tags;
exports["default"] = _default;