"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _api = _interopRequireDefault(require("../../../lib/api"));

var _LiqPay = _interopRequireDefault(require("./LiqPay"));

var _PayPalCheckout = _interopRequireDefault(require("./PayPalCheckout"));

var _StripeElements = _interopRequireDefault(require("./StripeElements"));

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

var PaymentForm = /*#__PURE__*/function (_React$Component) {
  _inherits(PaymentForm, _React$Component);

  var _super = _createSuper(PaymentForm);

  function PaymentForm(props) {
    var _this;

    _classCallCheck(this, PaymentForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchFormSettings", function () {
      _this.setState({
        loading: true
      });

      _api["default"].ajax.paymentFormSettings.retrieve().then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        _this.setState({
          formSettings: json,
          loading: false
        });
      })["catch"](function (e) {
        _this.setState({
          formSettings: null,
          loading: false
        });

        console.log(e);
      });
    });

    _this.state = {
      formSettings: null,
      loading: false
    };
    return _this;
  }

  _createClass(PaymentForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFormSettings();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.gateway !== this.props.gateway || nextProps.amount !== this.props.amount) {
        this.fetchFormSettings();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.gateway !== this.props.gateway || nextProps.amount !== this.props.amount || this.state !== nextState;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          gateway = _this$props.gateway,
          shopSettings = _this$props.shopSettings,
          onPayment = _this$props.onPayment,
          onCreateToken = _this$props.onCreateToken;
      var _this$state = this.state,
          formSettings = _this$state.formSettings,
          loading = _this$state.loading;

      if (loading) {
        return null;
      } else if (formSettings && gateway && gateway !== "") {
        switch (gateway) {
          case "paypal-checkout":
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "payment-form"
            }, /*#__PURE__*/_react["default"].createElement(_PayPalCheckout["default"], {
              formSettings: formSettings,
              shopSettings: shopSettings,
              onPayment: onPayment
            }));

          case "liqpay":
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "payment-form"
            }, /*#__PURE__*/_react["default"].createElement(_LiqPay["default"], {
              formSettings: formSettings,
              shopSettings: shopSettings,
              onPayment: onPayment
            }));

          case "stripe-elements":
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "payment-form"
            }, /*#__PURE__*/_react["default"].createElement(_StripeElements["default"], {
              formSettings: formSettings,
              shopSettings: shopSettings,
              onPayment: onPayment,
              onCreateToken: onCreateToken
            }));

          default:
            return /*#__PURE__*/_react["default"].createElement("div", null, "Payment Gateway ", /*#__PURE__*/_react["default"].createElement("b", null, gateway), " not found!");
        }
      } else {
        return null;
      }
    }
  }]);

  return PaymentForm;
}(_react["default"].Component);

var _default = PaymentForm;
exports["default"] = _default;