"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Attribute = function Attribute(_ref) {
  var name = _ref.name,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-gapless is-mobile product-attribute"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-5 attribute-name"
  }, name, ":"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-7 attribute-value"
  }, value));
};

var Attributes = function Attributes(_ref2) {
  var attributes = _ref2.attributes;

  if (attributes && attributes.length > 0) {
    var items = attributes.map(function (attribute, index) {
      return /*#__PURE__*/_react["default"].createElement(Attribute, {
        key: index,
        name: attribute.name,
        value: attribute.value
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-attributes"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title is-5"
    }, _settings.text.attributes), items);
  } else {
    return null;
  }
};

var _default = Attributes;
exports["default"] = _default;