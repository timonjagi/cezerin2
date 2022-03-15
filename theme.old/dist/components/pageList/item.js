"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pad = function pad(number) {
  return number < 10 ? "0" + number : number;
};

var formatDate = function formatDate(date) {
  return "".concat(pad(date.getDate()), ".").concat(pad(date.getMonth() + 1), ".").concat(date.getFullYear());
};

var PageListItem = function PageListItem(_ref) {
  var page = _ref.page;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-item"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: page.path
  }, page.meta_title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "date"
  }, formatDate(new Date(page.date_created))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, page.meta_description));
};

var _default = PageListItem;
exports["default"] = _default;