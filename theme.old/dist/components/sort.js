"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _settings = require("../lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sort = function Sort(_ref) {
  var defaultSort = _ref.defaultSort,
      currentSort = _ref.currentSort,
      setSort = _ref.setSort;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-mobile sort"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-4 sort-title"
  }, _settings.text.sort, ":"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "select is-fullwidth"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    onChange: function onChange(e) {
      setSort(e.target.value);
    },
    value: currentSort
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: defaultSort
  }, _settings.text.sortFavorite), /*#__PURE__*/_react["default"].createElement("option", {
    value: _settings.themeSettings.sortNewest
  }, _settings.text.sortNewest), /*#__PURE__*/_react["default"].createElement("option", {
    value: _settings.themeSettings.sortPriceLow
  }, _settings.text.sortPriceLow), /*#__PURE__*/_react["default"].createElement("option", {
    value: _settings.themeSettings.sortPriceHigh
  }, _settings.text.sortPriceHigh)))));
};

Sort.propTypes = {
  defaultSort: _propTypes["default"].string.isRequired,
  currentSort: _propTypes["default"].string.isRequired,
  setSort: _propTypes["default"].func.isRequired
};
var _default = Sort;
exports["default"] = _default;