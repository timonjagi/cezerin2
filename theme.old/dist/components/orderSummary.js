"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var helper = _interopRequireWildcard(require("../lib/helper"));

var _settings = require("../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SummaryItem = function SummaryItem(_ref) {
  var settings = _ref.settings,
      item = _ref.item,
      updateCartItemQuantiry = _ref.updateCartItemQuantiry;
  var thumbnail = helper.getThumbnailUrl(item.image_url, _settings.themeSettings.cartThumbnailWidth);
  var qtyOptions = [];
  var maxQty = item.stock_backorder ? _settings.themeSettings.maxCartItemQty : item.stock_quantity >= _settings.themeSettings.maxCartItemQty ? _settings.themeSettings.maxCartItemQty : item.stock_quantity;

  for (var i = 0; i <= maxQty; i++) {
    var optionText = i === 0 ? _settings.text.remove : i;
    qtyOptions.push( /*#__PURE__*/_react["default"].createElement("option", {
      key: i,
      value: i
    }, optionText));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-mobile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: item.path
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "product-image",
    src: thumbnail,
    alt: item.name,
    title: item.name
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: item.path
  }, item.name)), item.variant_name.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "cart-option-name"
  }, item.variant_name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "qty"
  }, /*#__PURE__*/_react["default"].createElement("span", null, _settings.text.qty, ":"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "select is-small"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    onChange: function onChange(e) {
      updateCartItemQuantiry(item.id, e.target.value);
    },
    value: item.quantity
  }, qtyOptions)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-3 has-text-right price"
  }, helper.formatCurrency(item.price_total, settings)));
};

SummaryItem.propTypes = {
  settings: _propTypes["default"].shape({}).isRequired,
  item: _propTypes["default"].shape({}).isRequired,
  updateCartItemQuantiry: _propTypes["default"].func.isRequired
};

var OrderSummary = function OrderSummary(props) {
  var updateCartItemQuantiry = props.updateCartItemQuantiry,
      _props$state = props.state,
      cart = _props$state.cart,
      settings = _props$state.settings;

  if (cart && cart.items && cart.items.length > 0) {
    var items = cart.items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(SummaryItem, {
        key: item.id,
        item: item,
        updateCartItemQuantiry: updateCartItemQuantiry,
        settings: settings
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "checkout-box content is-small",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title is-4"
    }, _settings.text.orderSummary), /*#__PURE__*/_react["default"].createElement("hr", {
      className: "separator"
    }), items, /*#__PURE__*/_react["default"].createElement("div", {
      className: "columns is-mobile is-gapless is-multiline summary-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-7"
    }, _settings.text.subtotal), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-5 has-text-right price"
    }, helper.formatCurrency(cart.subtotal, settings)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-7"
    }, _settings.text.shipping), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-5 has-text-right price"
    }, helper.formatCurrency(cart.shipping_total, settings)), cart.discount_total > 0 && /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-7"
    }, _settings.text.discount), cart.discount_total > 0 && /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-5 has-text-right price"
    }, helper.formatCurrency(cart.discount_total, settings)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-12"
    }, /*#__PURE__*/_react["default"].createElement("hr", {
      className: "separator"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-6 total-text"
    }, _settings.text.grandTotal), /*#__PURE__*/_react["default"].createElement("div", {
      className: "column is-6 total-price"
    }, helper.formatCurrency(cart.grand_total, settings))));
  }

  return null;
};

OrderSummary.propTypes = {
  updateCartItemQuantiry: _propTypes["default"].func.isRequired,
  state: _propTypes["default"].shape({
    cart: _propTypes["default"].shape({}),
    settings: _propTypes["default"].shape({}).isRequired
  }).isRequired
};
var _default = OrderSummary;
exports["default"] = _default;