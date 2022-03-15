"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

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

var CartCount = function CartCount(_ref) {
  var cart = _ref.cart;

  if (cart && cart.items && cart.items.length > 0) {
    var itemsCount = cart.items.reduce(function (a, b) {
      return a + b.quantity;
    }, 0);
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "cart-count"
    }, itemsCount);
  }

  return null;
};

var CartIcon = function CartIcon(_ref2) {
  var cartIsActive = _ref2.cartIsActive;

  if (cartIsActive) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/images/close.svg",
      className: "icon",
      alt: _settings.text.close,
      title: _settings.text.close,
      style: {
        minWidth: 24,
        padding: 4
      }
    });
  }

  return /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/images/shopping-bag.svg",
    className: "icon",
    alt: _settings.text.cart,
    title: _settings.text.cart,
    style: {
      minWidth: 24
    }
  });
};

var CartIndicator = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CartIndicator, _React$PureComponent);

  var _super = _createSuper(CartIndicator);

  function CartIndicator() {
    _classCallCheck(this, CartIndicator);

    return _super.apply(this, arguments);
  }

  _createClass(CartIndicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cart = _this$props.cart,
          onClick = _this$props.onClick,
          cartIsActive = _this$props.cartIsActive;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "cart-button",
        onClick: onClick
      }, /*#__PURE__*/_react["default"].createElement(CartIcon, {
        cartIsActive: cartIsActive
      }), /*#__PURE__*/_react["default"].createElement(CartCount, {
        cart: cart
      }));
    }
  }]);

  return CartIndicator;
}(_react["default"].PureComponent);

var _default = CartIndicator;
exports["default"] = _default;