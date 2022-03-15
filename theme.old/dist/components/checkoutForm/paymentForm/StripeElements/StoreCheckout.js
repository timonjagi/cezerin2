"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStripeElements = require("react-stripe-elements");

var _CheckoutForm = _interopRequireDefault(require("./CheckoutForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StoreCheckout = function StoreCheckout(_ref) {
  var formSettings = _ref.formSettings,
      shopSettings = _ref.shopSettings,
      onPayment = _ref.onPayment,
      onCreateToken = _ref.onCreateToken;
  return /*#__PURE__*/_react["default"].createElement(_reactStripeElements.Elements, null, /*#__PURE__*/_react["default"].createElement(_CheckoutForm["default"], {
    formSettings: formSettings,
    shopSettings: shopSettings,
    onPayment: onPayment,
    onCreateToken: onCreateToken
  }));
};

var _default = StoreCheckout;
exports["default"] = _default;