"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var helper = _interopRequireWildcard(require("../lib/helper"));

var _settings = require("../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ShippingFieldDiv = function ShippingFieldDiv(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "shipping-field"
  }, /*#__PURE__*/_react["default"].createElement("label", null, label, ": "), value);
};

var getCheckoutField = function getCheckoutField(checkoutFields, fieldName) {
  if (checkoutFields && checkoutFields.length > 0) {
    return checkoutFields.find(function (f) {
      return f.name === fieldName && f.status !== "hidden";
    });
  }

  return null;
};

var MobileField = function MobileField(_ref2) {
  var order = _ref2.order,
      checkoutFields = _ref2.checkoutFields;
  var checkoutField = getCheckoutField(checkoutFields, "mobile");
  return checkoutField && order.mobile !== "" ? /*#__PURE__*/_react["default"].createElement(ShippingFieldDiv, {
    label: helper.getCheckoutFieldLabel(checkoutField),
    value: order.mobile
  }) : null;
};

var CityField = function CityField(_ref3) {
  var order = _ref3.order,
      checkoutFields = _ref3.checkoutFields;
  var checkoutField = getCheckoutField(checkoutFields, "city");
  return checkoutField && order.shipping_address.city !== "" ? /*#__PURE__*/_react["default"].createElement(ShippingFieldDiv, {
    label: helper.getCheckoutFieldLabel(checkoutField),
    value: order.shipping_address.city
  }) : null;
};

var CommentsField = function CommentsField(_ref4) {
  var order = _ref4.order,
      checkoutFields = _ref4.checkoutFields;
  var checkoutField = getCheckoutField(checkoutFields, "comments");
  return checkoutField && order.comments !== "" ? /*#__PURE__*/_react["default"].createElement(ShippingFieldDiv, {
    label: helper.getCheckoutFieldLabel(checkoutField),
    value: order.comments
  }) : null;
};

var ShippingFields = function ShippingFields(_ref5) {
  var order = _ref5.order,
      shippingMethod = _ref5.shippingMethod;
  var shippingFields = null;

  if (shippingMethod) {
    shippingFields = Object.keys(order.shipping_address).map(function (key, i) {
      var fieldLabel = helper.getShippingFieldLabelOrderSuccess(key);
      var fieldValue = order.shipping_address[key];

      if (key.indexOf("coordinates") === -1 && fieldValue !== "" && fieldLabel !== "") {
        return /*#__PURE__*/_react["default"].createElement(ShippingFieldDiv, {
          key: i,
          label: fieldLabel,
          value: fieldValue
        });
      }
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, shippingFields);
};

var OrderItem = function OrderItem(_ref6) {
  var item = _ref6.item,
      settings = _ref6.settings;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-mobile is-gapless checkout-success-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-6"
  }, item.name, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", null, item.variant_name)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-2 has-text-right"
  }, helper.formatCurrency(item.price, settings)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-2 has-text-centered"
  }, item.quantity), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-2 has-text-right"
  }, helper.formatCurrency(item.price_total, settings)));
};

var OrderItems = function OrderItems(_ref7) {
  var items = _ref7.items,
      settings = _ref7.settings;

  if (items && items.length > 0) {
    var rows = items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(OrderItem, {
        key: item.id,
        item: item,
        settings: settings
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", null, rows);
  }

  return null;
};

var CheckoutSuccess = function CheckoutSuccess(_ref8) {
  var order = _ref8.order,
      settings = _ref8.settings,
      pageDetails = _ref8.pageDetails,
      shippingMethod = _ref8.shippingMethod,
      checkoutFields = _ref8.checkoutFields;

  if (order && order.items && order.items.length > 0) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "checkout-success-details"
    }, /*#__PURE__*/_react["default"].createElement("h1", {
      className: "checkout-success-title"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/images/success.svg",
      alt: ""
    }), /*#__PURE__*/_react["default"].createElement("br", null), _settings.text.checkoutSuccessTitle), /*#__PURE__*/_react["default"].createElement("div", {
      dangerouslySetInnerHTML: {
        __html: pageDetails.content
      }
    }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "columns",
      style: {
        marginBottom: "3rem"
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-6"
    }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.shipping), /*#__PURE__*/_react["default"].createElement(MobileField, {
      order: order,
      checkoutFields: checkoutFields
    }), /*#__PURE__*/_react["default"].createElement(CityField, {
      order: order,
      checkoutFields: checkoutFields
    }), /*#__PURE__*/_react["default"].createElement(ShippingFields, {
      order: order,
      shippingMethod: shippingMethod
    }), /*#__PURE__*/_react["default"].createElement(CommentsField, {
      order: order,
      checkoutFields: checkoutFields
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-6"
    }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.orderNumber), ": ", order.number, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.shippingMethod), ": ", order.shipping_method, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.paymentMethod), ": ", order.payment_method, /*#__PURE__*/_react["default"].createElement("br", null))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "columns is-mobile is-gapless checkout-success-row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-6"
    }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.productName)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-2 has-text-right"
    }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.price)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-2 has-text-centered"
    }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.qty)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-2 has-text-right"
    }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.total))), /*#__PURE__*/_react["default"].createElement(OrderItems, {
      items: order.items,
      settings: settings
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "columns"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-offset-7 checkout-success-totals"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, _settings.text.subtotal, ":"), /*#__PURE__*/_react["default"].createElement("span", null, helper.formatCurrency(order.subtotal, settings))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, _settings.text.shipping, ":"), /*#__PURE__*/_react["default"].createElement("span", null, helper.formatCurrency(order.shipping_total, settings))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.grandTotal, ":"), /*#__PURE__*/_react["default"].createElement("b", null, helper.formatCurrency(order.grand_total, settings))))));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "has-text-centered"
  }, _settings.text.cartEmpty);
};

CheckoutSuccess.propTypes = {
  order: _propTypes["default"].shape({}),
  settings: _propTypes["default"].shape({}).isRequired,
  pageDetails: _propTypes["default"].shape({}).isRequired,
  shippingMethod: _propTypes["default"].shape({}).isRequired,
  checkoutFields: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired
};
CheckoutSuccess.defaultProps = {
  order: null
};
var _default = CheckoutSuccess;
exports["default"] = _default;