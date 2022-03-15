"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

var _sort = _interopRequireDefault(require("../sort"));

var _attributeFilter = _interopRequireDefault(require("./attributeFilter"));

var _priceSlider = _interopRequireDefault(require("./priceSlider"));

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

var ProductFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductFilter, _React$Component);

  var _super = _createSuper(ProductFilter);

  function ProductFilter(props) {
    var _this;

    _classCallCheck(this, ProductFilter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "sidebarToggle", function () {
      _this.setState({
        sidebarIsActive: !_this.state.sidebarIsActive
      });

      document.body.classList.toggle("sidebar-active");
    });

    _defineProperty(_assertThisInitialized(_this), "sidebarClose", function () {
      _this.setState({
        sidebarIsActive: false
      });

      document.body.classList.remove("sidebar-active");
    });

    _this.state = {
      sidebarIsActive: false
    };
    return _this;
  }

  _createClass(ProductFilter, [{
    key: "render",
    value: function render() {
      var sidebarIsActive = this.state.sidebarIsActive;
      var _this$props$state = this.props.state,
          categoryDetails = _this$props$state.categoryDetails,
          categories = _this$props$state.categories,
          settings = _this$props$state.settings,
          productFilter = _this$props$state.productFilter,
          productsMinPrice = _this$props$state.productsMinPrice,
          productsMaxPrice = _this$props$state.productsMaxPrice,
          productsAttributes = _this$props$state.productsAttributes;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "is-hidden-tablet"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "button is-fullwidth",
        onClick: this.sidebarToggle
      }, _settings.text.filterProducts)), /*#__PURE__*/_react["default"].createElement("div", {
        className: sidebarIsActive ? "modal is-active" : "is-hidden-mobile",
        style: {
          zIndex: 101
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: sidebarIsActive ? "dark-overflow" : "",
        onClick: this.sidebarClose
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: sidebarIsActive ? "modal-content" : ""
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: sidebarIsActive ? "box sidebar" : ""
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "is-hidden-tablet",
        style: {
          marginBottom: 30
        }
      }, /*#__PURE__*/_react["default"].createElement(_sort["default"], {
        defaultSort: settings.default_product_sorting,
        currentSort: productFilter.sort,
        setSort: this.props.setSort
      })), /*#__PURE__*/_react["default"].createElement(_attributeFilter["default"], {
        attributes: productsAttributes,
        setFilterAttribute: this.props.setFilterAttribute,
        unsetFilterAttribute: this.props.unsetFilterAttribute
      }), /*#__PURE__*/_react["default"].createElement(_priceSlider["default"], {
        minPrice: productsMinPrice,
        maxPrice: productsMaxPrice,
        minValue: productFilter.priceFrom,
        maxValue: productFilter.priceTo,
        setPriceFromAndTo: this.props.setPriceFromAndTo,
        settings: settings
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "button is-fullwidth is-dark is-hidden-tablet",
        onClick: this.sidebarClose
      }, _settings.text.close)))));
    }
  }]);

  return ProductFilter;
}(_react["default"].Component);

var _default = ProductFilter;
exports["default"] = _default;