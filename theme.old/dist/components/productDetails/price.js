"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var helper = _interopRequireWildcard(require("../../lib/helper"));

var _settings = require("../../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormattedCurrency = function FormattedCurrency(_ref) {
  var number = _ref.number,
      settings = _ref.settings;
  return helper.formatCurrency(number, settings);
};

var NewAndOldPrices = function NewAndOldPrices(_ref2) {
  var newPrice = _ref2.newPrice,
      oldPrice = _ref2.oldPrice,
      settings = _ref2.settings;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-price"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "product-new-price"
  }, /*#__PURE__*/_react["default"].createElement(FormattedCurrency, {
    settings: settings,
    number: newPrice
  })), /*#__PURE__*/_react["default"].createElement("del", {
    className: "product-old-price"
  }, /*#__PURE__*/_react["default"].createElement(FormattedCurrency, {
    settings: settings,
    number: oldPrice
  })));
};

var Price = function Price(_ref3) {
  var product = _ref3.product,
      variant = _ref3.variant,
      isAllOptionsSelected = _ref3.isAllOptionsSelected,
      settings = _ref3.settings;
  var priceStyle = {};

  if (_settings.themeSettings.details_price_size && _settings.themeSettings.details_price_size > 0) {
    priceStyle.fontSize = _settings.themeSettings.details_price_size + "px";
  }

  if (_settings.themeSettings.details_price_color && _settings.themeSettings.details_price_color.length > 0) {
    priceStyle.color = _settings.themeSettings.details_price_color;
  }

  var price = 0;
  var oldPrice = 0;

  if (product.variable && variant && variant.price > 0) {
    price = variant.price;
  } else {
    price = product.price;
  }

  if (product.on_sale) {
    oldPrice = product.regular_price;
  }

  if (oldPrice > 0) {
    return /*#__PURE__*/_react["default"].createElement(NewAndOldPrices, {
      settings: settings,
      newPrice: price,
      oldPrice: oldPrice
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "product-price",
      style: priceStyle
    }, /*#__PURE__*/_react["default"].createElement(FormattedCurrency, {
      settings: settings,
      number: price
    }));
  }
};

var _default = Price;
exports["default"] = _default;