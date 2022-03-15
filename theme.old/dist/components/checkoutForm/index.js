"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lscache = _interopRequireDefault(require("lscache"));

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

var _stepContacts = _interopRequireDefault(require("./stepContacts"));

var _stepPayment = _interopRequireDefault(require("./stepPayment"));

var _stepShipping = _interopRequireDefault(require("./stepShipping"));

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

var CheckoutForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckoutForm, _React$Component);

  var _super = _createSuper(CheckoutForm);

  function CheckoutForm(props) {
    var _this;

    _classCallCheck(this, CheckoutForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "changeStep", function (step) {
      _this.setState({
        step: step
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactsSave", function () {
      _this.changeStep(2);
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactsEdit", function () {
      _this.changeStep(1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleShippingSave", function () {
      _this.changeStep(3);
    });

    _defineProperty(_assertThisInitialized(_this), "handleShippingEdit", function () {
      _this.changeStep(2);
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactsSubmit", function (values) {
      var shipping_address = values.shipping_address,
          billing_address = values.billing_address;
      shipping_address.full_name = "".concat(values.first_name, " ").concat(values.last_name);

      _this.props.updateCart({
        full_name: "".concat(values.first_name, " ").concat(values.last_name),
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
        shipping_address: shipping_address,
        billing_address: billing_address,
        payment_method_id: null,
        shipping_method_id: null
      }, function (cart) {
        _this.props.loadShippingMethods();

        _this.props.loadPaymentMethods();
      });

      _this.handleContactsSave();
    });

    _defineProperty(_assertThisInitialized(_this), "handleShippingMethodSave", function (shippingMethodId) {
      _this.props.updateCart({
        payment_method_id: null,
        shipping_method_id: shippingMethodId
      }, function (cart) {
        _this.props.loadPaymentMethods();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePaymentMethodSave", function (paymentMethodId) {
      _this.props.updateCart({
        payment_method_id: paymentMethodId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isShowPaymentForm", function () {
      var payment_method_gateway = _this.props.state.cart.payment_method_gateway;
      var paymentGatewayExists = payment_method_gateway && payment_method_gateway !== "";
      return paymentGatewayExists;
    });

    _defineProperty(_assertThisInitialized(_this), "handleShippingSubmit", function (values) {
      if (_this.isShowPaymentForm()) {
        var shipping_address = values.shipping_address,
            billing_address = values.billing_address,
            comments = values.comments;
        shipping_address.full_name = "".concat(values.first_name, " ").concat(values.last_name);

        _this.props.updateCart({
          shipping_address: shipping_address,
          billing_address: billing_address,
          comments: comments
        });

        _this.handleShippingSave();
      } else {
        _this.props.checkout(values);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSuccessPayment", function () {
      _this.props.checkout(null);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheckoutWithToken", function (tokenId) {
      _this.props.updateCart({
        payment_token: tokenId
      }, function (cart) {
        _this.props.checkout(null);
      });
    });

    _this.state = {
      step: 1
    };
    return _this;
  }

  _createClass(CheckoutForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadShippingMethods();
      this.props.loadPaymentMethods();
      this.props.customerData({
        token: _lscache["default"].get("auth_data")
      });
      this.props.cartLayerInitialized({
        cartlayerBtnInitialized: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$props$state = this.props.state,
          settings = _this$props$state.settings,
          cart = _this$props$state.cart,
          customerProperties = _this$props$state.customerProperties,
          paymentMethods = _this$props$state.paymentMethods,
          shippingMethods = _this$props$state.shippingMethods,
          shippingMethod = _this$props$state.shippingMethod,
          loadingShippingMethods = _this$props$state.loadingShippingMethods,
          loadingPaymentMethods = _this$props$state.loadingPaymentMethods,
          checkoutFields = _this$props$state.checkoutFields,
          processingCheckout = _this$props$state.processingCheckout,
          cartlayerBtnInitialized = _this$props$state.cartlayerBtnInitialized;
      var _themeSettings$checko = _settings.themeSettings.checkoutInputClass,
          checkoutInputClass = _themeSettings$checko === void 0 ? "checkout-field" : _themeSettings$checko,
          _themeSettings$checko2 = _settings.themeSettings.checkoutButtonClass,
          checkoutButtonClass = _themeSettings$checko2 === void 0 ? "checkout-button" : _themeSettings$checko2,
          _themeSettings$checko3 = _settings.themeSettings.checkoutEditButtonClass,
          checkoutEditButtonClass = _themeSettings$checko3 === void 0 ? "checkout-button-edit" : _themeSettings$checko3;

      if (cart && cart.items.length > 0) {
        var showPaymentForm = this.isShowPaymentForm();
        var _shippingMethod = null;
        var paymentMethod = null;
        var shipping_method_id = cart.shipping_method_id,
            payment_method_id = cart.payment_method_id;

        if (shipping_method_id && shippingMethods && shippingMethods.length > 0) {
          _shippingMethod = shippingMethods.find(function (method) {
            return method.id === shipping_method_id;
          });
        }

        if (payment_method_id && paymentMethods && paymentMethods.length > 0) {
          paymentMethod = paymentMethods.find(function (method) {
            return method.id === payment_method_id;
          });
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-form"
        }, /*#__PURE__*/_react["default"].createElement(_stepContacts["default"], {
          isReadOnly: step > 1,
          step: step,
          title: _settings.text.customerDetails,
          inputClassName: checkoutInputClass,
          buttonClassName: checkoutButtonClass,
          editButtonClassName: checkoutEditButtonClass,
          initialValues: cart,
          settings: settings,
          customerProperties: customerProperties,
          paymentMethods: paymentMethods,
          shippingMethod: _shippingMethod,
          shippingMethods: shippingMethods,
          loadingShippingMethods: loadingShippingMethods,
          loadingPaymentMethods: loadingPaymentMethods,
          checkoutFields: checkoutFields,
          onEdit: this.handleContactsEdit,
          onSubmit: this.handleContactsSubmit,
          saveShippingMethod: this.handleShippingMethodSave,
          savePaymentMethod: this.handlePaymentMethodSave,
          cartlayerBtnInitialized: cartlayerBtnInitialized
        }), /*#__PURE__*/_react["default"].createElement(_stepShipping["default"], {
          show: step >= 2,
          step: step,
          isReadOnly: step > 2,
          title: _settings.text.shipping,
          inputClassName: checkoutInputClass,
          buttonClassName: checkoutButtonClass,
          editButtonClassName: checkoutEditButtonClass,
          initialValues: cart,
          settings: settings,
          processingCheckout: processingCheckout,
          shippingMethod: _shippingMethod,
          paymentMethod: paymentMethod,
          checkoutFields: checkoutFields,
          showPaymentForm: showPaymentForm,
          onSave: this.handleShippingSave,
          onEdit: this.handleShippingEdit,
          onSubmit: this.handleShippingSubmit
        }), showPaymentForm && /*#__PURE__*/_react["default"].createElement(_stepPayment["default"], {
          show: step === 3,
          step: step,
          title: _settings.text.payment,
          inputClassName: checkoutInputClass,
          buttonClassName: checkoutButtonClass,
          cart: cart,
          settings: settings,
          processingCheckout: processingCheckout,
          handleSuccessPayment: this.handleSuccessPayment,
          onCreateToken: this.handleCheckoutWithToken
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("p", null, _settings.text.emptyCheckout);
      }
    }
  }]);

  return CheckoutForm;
}(_react["default"].Component);

var _default = CheckoutForm;
exports["default"] = _default;