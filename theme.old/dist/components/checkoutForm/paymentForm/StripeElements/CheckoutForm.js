"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStripeElements = require("react-stripe-elements");

var _CardSection = _interopRequireDefault(require("./CardSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var CheckoutForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckoutForm, _React$Component);

  var _super = _createSuper(CheckoutForm);

  function CheckoutForm(props) {
    var _this;

    _classCallCheck(this, CheckoutForm);

    _this = _super.call(this, props);
    _this.state = {
      inProgress: false
    };
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckoutForm, [{
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {
        var _this$props, formSettings, onCreateToken, stripe, _yield$stripe$createT, token;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  inProgress: true
                });
                _this$props = this.props, formSettings = _this$props.formSettings, onCreateToken = _this$props.onCreateToken, stripe = _this$props.stripe;
                _context.next = 4;
                return stripe.createToken({
                  name: formSettings.email
                });

              case 4:
                _yield$stripe$createT = _context.sent;
                token = _yield$stripe$createT.token;

                if (token && token !== "undefined") {
                  onCreateToken(token.id);
                } else {
                  this.setState({
                    inProgress: false
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit(_x) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "render",
    value: function render() {
      var inProgress = this.state.inProgress;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_CardSection["default"], {
        title: "Credit Card details"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "checkout-button-wrap"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.submit,
        disabled: inProgress,
        className: "checkout-button button is-primary".concat(inProgress ? " is-loading" : "")
      }, "Confirm order")));
    }
  }]);

  return CheckoutForm;
}(_react["default"].Component);

var _default = (0, _reactStripeElements.injectStripe)(CheckoutForm);

exports["default"] = _default;