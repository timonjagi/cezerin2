"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lscache = _interopRequireDefault(require("lscache"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("../../lib/settings");

var _authHeader = require("../authHeader");

var _account = _interopRequireDefault(require("./account"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccountForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AccountForm, _React$Component);

  var _super = _createSuper(AccountForm);

  function AccountForm(props) {
    var _this;

    _classCallCheck(this, AccountForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handlecustomerProperties", function () {
      _this.props.customerData({
        token: _lscache["default"].get("auth_data")
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFormSubmit", function (values) {
      var shipping_address = values.shipping_address,
          billing_address = values.billing_address;

      _this.props.changecustomerProperties({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: (0, _authHeader.encodeUserPassword)(values.password),
        token: _lscache["default"].get("auth_data"),
        shipping_address: shipping_address,
        billing_address: billing_address,
        saved_addresses: _this.props.state.customerProperties.order_statuses.total_count,
        history: _this.props.history
      });

      _this.props.updateCart({
        shipping_address: shipping_address,
        billing_address: billing_address,
        payment_method_id: null,
        shipping_method_id: null
      });
    });

    return _this;
  }

  _createClass(AccountForm, [{
    key: "render",
    value: function render() {
      var _this$props$state = this.props.state,
          settings = _this$props$state.settings,
          cart = _this$props$state.cart,
          customerProperties = _this$props$state.customerProperties,
          initialValues = _this$props$state.initialValues,
          cartlayerBtnInitialized = _this$props$state.cartlayerBtnInitialized;

      _lscache["default"].flushExpired();

      if (_lscache["default"].get("auth_data") === null && customerProperties === undefined) {
        _lscache["default"].flush();

        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: {
            pathname: "/login"
          }
        });
      } else {
        var cacheTimeStamp = localStorage.getItem("lscache-auth_data-cacheexpiration");

        if (Number(cacheTimeStamp) <= Math.floor(new Date().getTime() / 1000)) {
          _lscache["default"].flush();

          return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
            to: {
              pathname: "/login"
            }
          });
        }

        var _themeSettings$checko = _settings.themeSettings.checkoutInputClass,
            checkoutInputClass = _themeSettings$checko === void 0 ? "checkout-field" : _themeSettings$checko,
            _themeSettings$checko2 = _settings.themeSettings.checkoutButtonClass,
            checkoutButtonClass = _themeSettings$checko2 === void 0 ? "checkout-button" : _themeSettings$checko2,
            _themeSettings$checko3 = _settings.themeSettings.checkoutEditButtonClass,
            checkoutEditButtonClass = _themeSettings$checko3 === void 0 ? "checkout-button-edit" : _themeSettings$checko3;
        return /*#__PURE__*/_react["default"].createElement(_account["default"], {
          inputClassName: checkoutInputClass,
          buttonClassName: checkoutButtonClass,
          editButtonClassName: checkoutEditButtonClass,
          settings: settings,
          cart: cart,
          customerProperties: customerProperties || this.handlecustomerProperties(),
          initialValues: initialValues,
          cartlayerBtnInitialized: cartlayerBtnInitialized,
          onSubmit: this.handleFormSubmit
        });
      }
    }
  }]);

  return AccountForm;
}(_react["default"].Component);

var _default = AccountForm;
exports["default"] = _default;