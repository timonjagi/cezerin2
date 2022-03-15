"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _item = _interopRequireDefault(require("./item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PageList = function PageList(_ref) {
  var pages = _ref.pages;
  var items = pages ? pages.map(function (page, index) {
    return /*#__PURE__*/_react["default"].createElement(_item["default"], {
      key: index,
      page: page
    });
  }) : null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-list"
  }, items);
};

var _default = PageList;
exports["default"] = _default;