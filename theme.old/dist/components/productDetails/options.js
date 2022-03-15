"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Option = function Option(_ref) {
  var option = _ref.option,
      _onChange = _ref.onChange;
  var values = option.values.sort(function (a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  }).map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: value.id
    }, value.name);
  });
  var notSelectedTitle = "".concat(_settings.text.selectOption, " ").concat(option.name);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-option"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-option-name"
  }, option.name), /*#__PURE__*/_react["default"].createElement("span", {
    className: "select is-fullwidth"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    onChange: function onChange(e) {
      _onChange(option.id, e.target.value);
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, notSelectedTitle), values)));
};

var Options = function Options(_ref2) {
  var options = _ref2.options,
      onChange = _ref2.onChange;

  if (options && options.length > 0) {
    var items = options.map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(Option, {
        key: index,
        option: option,
        onChange: onChange
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-options"
    }, items);
  } else {
    return null;
  }
};

var _default = Options;
exports["default"] = _default;