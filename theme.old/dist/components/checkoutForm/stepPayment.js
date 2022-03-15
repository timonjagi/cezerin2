"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

var _paymentForm = _interopRequireDefault(require("./paymentForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckoutStepPayment = function CheckoutStepPayment(props) {
  var cart = props.cart,
      settings = props.settings,
      processingCheckout = props.processingCheckout,
      handleSuccessPayment = props.handleSuccessPayment,
      inputClassName = props.inputClassName,
      buttonClassName = props.buttonClassName,
      shippingMethod = props.shippingMethod,
      show = props.show,
      title = props.title,
      onCreateToken = props.onCreateToken;
  var payment_method_gateway = cart.payment_method_gateway,
      grand_total = cart.grand_total;

  if (!show) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "checkout-step"
    }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "3"), title));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "3"), title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-button-wrap"
  }, !processingCheckout && /*#__PURE__*/_react["default"].createElement(_paymentForm["default"], {
    gateway: payment_method_gateway,
    amount: grand_total,
    shopSettings: settings,
    shippingMethod: shippingMethod,
    onPayment: handleSuccessPayment,
    inputClassName: inputClassName,
    buttonClassName: buttonClassName,
    onCreateToken: onCreateToken
  }), processingCheckout && /*#__PURE__*/_react["default"].createElement("p", null, _settings.text.loading)));
};

var _default = CheckoutStepPayment;
exports["default"] = _default;