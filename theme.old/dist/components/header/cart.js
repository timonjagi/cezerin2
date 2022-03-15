"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lscache = _interopRequireDefault(require("lscache"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var helper = _interopRequireWildcard(require("../../lib/helper"));

var _settings = require("../../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CartItem = function CartItem(_ref) {
  var item = _ref.item,
      deleteCartItem = _ref.deleteCartItem,
      settings = _ref.settings;
  var thumbnail = helper.getThumbnailUrl(item.image_url, _settings.themeSettings.cartThumbnailWidth);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-mobile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: item.path
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: thumbnail
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: item.path
  }, item.name)), item.variant_name.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "cart-option-name"
  }, item.variant_name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "cart-quantity"
  }, _settings.text.qty, ": ", item.quantity)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-4 has-text-right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mini-cart-item-price"
  }, helper.formatCurrency(item.price_total, settings)), /*#__PURE__*/_react["default"].createElement("a", {
    className: "button is-light is-small",
    onClick: function onClick() {
      return deleteCartItem(item.id);
    }
  }, _settings.text.remove)));
};

var Cart = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Cart, _React$PureComponent);

  var _super = _createSuper(Cart);

  function Cart() {
    _classCallCheck(this, Cart);

    return _super.apply(this, arguments);
  }

  _createClass(Cart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cart = _this$props.cart,
          deleteCartItem = _this$props.deleteCartItem,
          settings = _this$props.settings,
          cartToggle = _this$props.cartToggle;

      if (cart && cart.items && cart.items.length > 0) {
        var items = cart.items.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(CartItem, {
            key: item.id,
            item: item,
            deleteCartItem: deleteCartItem,
            settings: settings
          });
        });
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mini-cart"
        }, items, /*#__PURE__*/_react["default"].createElement("hr", {
          className: "separator"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "columns is-mobile is-gapless"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-7"
        }, /*#__PURE__*/_react["default"].createElement("b", null, _settings.text.subtotal)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-5 has-text-right"
        }, /*#__PURE__*/_react["default"].createElement("b", null, helper.formatCurrency(cart.subtotal, settings)))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
          className: "button is-primary is-fullwidth has-text-centered",
          style: {
            textTransform: "uppercase"
          },
          to: {
            pathname: _lscache["default"].get("auth_data") !== null ? "/checkout" : "/login",
            state: {
              cartLayer: true
            }
          },
          onClick: cartToggle
        }, _settings.text.proceedToCheckout));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mini-cart"
      }, /*#__PURE__*/_react["default"].createElement("p", null, _settings.text.cartEmpty));
    }
  }]);

  return Cart;
}(_react["default"].PureComponent);

var _default = Cart;
exports["default"] = _default;