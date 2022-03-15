"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

var _forgotPassword = _interopRequireDefault(require("./forgotPassword"));

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

var ForgotPasswordForm = /*#__PURE__*/function (_React$Component) {
  _inherits(ForgotPasswordForm, _React$Component);

  var _super = _createSuper(ForgotPasswordForm);

  function ForgotPasswordForm(props) {
    var _this;

    _classCallCheck(this, ForgotPasswordForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleFormSubmit", function (values) {
      _this.props.forgotPassword({
        email: values.email,
        history: _this.props.history
      });
    });

    return _this;
  }

  _createClass(ForgotPasswordForm, [{
    key: "render",
    value: function render() {
      var _this$props$state = this.props.state,
          settings = _this$props$state.settings,
          forgotPasswordProperties = _this$props$state.forgotPasswordProperties;
      var _themeSettings$checko = _settings.themeSettings.checkoutInputClass,
          checkoutInputClass = _themeSettings$checko === void 0 ? "checkout-field" : _themeSettings$checko,
          _themeSettings$checko2 = _settings.themeSettings.checkoutButtonClass,
          checkoutButtonClass = _themeSettings$checko2 === void 0 ? "checkout-button" : _themeSettings$checko2;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_forgotPassword["default"], {
        inputClassName: checkoutInputClass,
        buttonClassName: checkoutButtonClass,
        settings: settings,
        forgotPasswordProperties: forgotPasswordProperties,
        onSubmit: this.handleFormSubmit
      }));
    }
  }]);

  return ForgotPasswordForm;
}(_react["default"].Component);

var _default = ForgotPasswordForm;
exports["default"] = _default;