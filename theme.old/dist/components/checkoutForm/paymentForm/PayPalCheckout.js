"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var scriptAdded = false;

var PayPalButton = /*#__PURE__*/function (_React$Component) {
  _inherits(PayPalButton, _React$Component);

  var _super = _createSuper(PayPalButton);

  function PayPalButton(props) {
    var _this;

    _classCallCheck(this, PayPalButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addScript", function () {
      if (scriptAdded) {
        _this.executeScript();

        return;
      }

      var SCRIPT_URL = "https://www.paypalobjects.com/api/checkout.min.js";
      var container = document.body || document.head;
      var script = document.createElement("script");
      script.src = SCRIPT_URL;

      script.onload = function () {
        _this.executeScript();
      };

      container.appendChild(script);
      scriptAdded = true;
    });

    _defineProperty(_assertThisInitialized(_this), "executeScript", function () {
      var _this$props = _this.props,
          formSettings = _this$props.formSettings,
          shopSettings = _this$props.shopSettings,
          onPayment = _this$props.onPayment;
      document.getElementById("paypal-button-container").innerHTML = null;
      paypal.Button.render({
        // Set your environment
        env: formSettings.env,
        // sandbox | production
        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,
        // Specify the style of the button
        style: {
          label: "pay",
          size: formSettings.size,
          shape: formSettings.shape,
          color: formSettings.color
        },
        client: {
          sandbox: formSettings.client,
          production: formSettings.client
        },
        // Wait for the PayPal button to be clicked
        payment: function payment(data, actions) {
          return actions.payment.create({
            payment: {
              intent: "sale",
              transactions: [{
                custom: formSettings.order_id,
                notify_url: formSettings.notify_url,
                amount: {
                  total: formSettings.amount,
                  currency: formSettings.currency
                }
              }]
            },
            experience: {
              input_fields: {
                no_shipping: 1
              }
            }
          });
        },
        // Wait for the payment to be authorized by the customer
        onAuthorize: function onAuthorize(data, actions) {
          return actions.payment.execute().then(function () {
            onPayment();
          });
        }
      }, "#paypal-button-container");
    });

    return _this;
  }

  _createClass(PayPalButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addScript();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.executeScript();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          formSettings = _this$props2.formSettings,
          shopSettings = _this$props2.shopSettings,
          onPayment = _this$props2.onPayment;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        id: "paypal-button-container"
      }));
    }
  }]);

  return PayPalButton;
}(_react["default"].Component);

var _default = PayPalButton;
exports["default"] = _default;