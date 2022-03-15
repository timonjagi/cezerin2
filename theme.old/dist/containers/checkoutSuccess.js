"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _checkoutSuccess = _interopRequireDefault(require("../components/checkoutSuccess"));

var _metaTags = _interopRequireDefault(require("../components/metaTags"));

var helper = _interopRequireWildcard(require("../lib/helper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckoutSuccessContainer = function CheckoutSuccessContainer(props) {
  var _props$state = props.state,
      pageDetails = _props$state.pageDetails,
      order = _props$state.order,
      settings = _props$state.settings,
      shippingMethods = _props$state.shippingMethods,
      checkoutFields = _props$state.checkoutFields;
  var shippingMethod = helper.getShippingMethodFromOrder(order, shippingMethods);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_metaTags["default"], {
    title: pageDetails.meta_title,
    description: pageDetails.meta_description,
    canonicalUrl: pageDetails.url,
    ogTitle: pageDetails.meta_title,
    ogDescription: pageDetails.meta_description
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "section section-checkout"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-8 is-offset-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-box"
  }, /*#__PURE__*/_react["default"].createElement(_checkoutSuccess["default"], {
    order: order,
    settings: settings,
    pageDetails: pageDetails,
    shippingMethod: shippingMethod,
    checkoutFields: checkoutFields
  })))))));
};

CheckoutSuccessContainer.propTypes = {
  state: _propTypes["default"].shape({
    settings: _propTypes["default"].shape({}),
    pageDetails: _propTypes["default"].shape({}),
    order: _propTypes["default"].shape({}),
    shippingMethods: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
    checkoutFields: _propTypes["default"].arrayOf(_propTypes["default"].shape({}))
  }).isRequired
};
var _default = CheckoutSuccessContainer;
exports["default"] = _default;