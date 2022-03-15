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

var SearchBox = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  var _super = _createSuper(SearchBox);

  function SearchBox(props) {
    var _this;

    _classCallCheck(this, SearchBox);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        _this.handleSearch();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.keyCode === 27) {
        _this.handleClear();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      _this.props.onSearch(_this.state.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      _this.setState({
        value: ""
      });

      _this.props.onSearch("");
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        hasFocus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        hasFocus: false
      });
    });

    _this.state = {
      value: props.value,
      hasFocus: false
    };
    return _this;
  }

  _createClass(SearchBox, [{
    key: "render",
    value: function render() {
      var hasFocus = this.state.hasFocus;
      var placeholderText = _settings.themeSettings.search_placeholder && _settings.themeSettings.search_placeholder.length > 0 ? _settings.themeSettings.search_placeholder : _settings.text.searchPlaceholder;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "search-box " + this.props.className + (hasFocus ? " has-focus" : "")
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "search-input",
        type: "text",
        placeholder: placeholderText,
        value: this.state.value,
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }), /*#__PURE__*/_react["default"].createElement("img", {
        className: "search-icon-search",
        src: "/assets/images/search.svg",
        alt: _settings.text.search,
        title: _settings.text.search,
        onClick: this.handleSearch
      }), this.state.value && this.state.value !== "" && /*#__PURE__*/_react["default"].createElement("img", {
        className: "search-icon-clear",
        src: "/assets/images/close.svg",
        onClick: this.handleClear
      }));
    }
  }]);

  return SearchBox;
}(_react["default"].Component);

var _default = SearchBox;
exports["default"] = _default;