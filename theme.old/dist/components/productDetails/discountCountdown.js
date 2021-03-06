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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DiscountCountdown = /*#__PURE__*/function (_React$Component) {
  _inherits(DiscountCountdown, _React$Component);

  var _super = _createSuper(DiscountCountdown);

  function DiscountCountdown(props) {
    var _this;

    _classCallCheck(this, DiscountCountdown);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "tick", function () {
      var dateNow = new Date();
      var dateTo = new Date(_this.props.product.date_sale_to);
      var diff = Math.abs(Math.floor((dateTo.getTime() - dateNow.getTime()) / 1000));

      _this.setState({
        diff: diff
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pad", function (num) {
      return num < 10 ? "0" + num : num;
    });

    _this.state = {
      timer: null,
      diff: null
    };
    return _this;
  }

  _createClass(DiscountCountdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var timer = setInterval(this.tick, 1000);
      this.setState({
        timer: timer
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.state.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var product = this.props.product;
      var diff = this.state.diff;

      if (product) {
        var days = Math.floor(diff / (24 * 60 * 60));
        var leftSec = diff - days * 24 * 60 * 60;
        var hrs = Math.floor(leftSec / (60 * 60));
        leftSec = leftSec - hrs * 60 * 60;
        var min = Math.floor(leftSec / 60);
        leftSec = leftSec - min * 60;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "discount-countdown"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "discount-title"
        }, _settings.text.saleEnds, ":"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "columns is-mobile has-text-centered discount-numbers is-gapless",
          style: {
            margin: "8px 0"
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, this.pad(days)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-1"
        }, ":"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, this.pad(hrs)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-1"
        }, ":"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, this.pad(min)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-1"
        }, ":"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, this.pad(leftSec))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "columns is-mobile has-text-centered discount-labels is-gapless"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, _settings.text.days), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-1"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, _settings.text.hours), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-1"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, _settings.text.minutes), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-1"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-2"
        }, _settings.text.seconds)));
      } else {
        return null;
      }
    }
  }]);

  return DiscountCountdown;
}(_react["default"].Component);

var _default = DiscountCountdown;
exports["default"] = _default;