"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _settings = require("../../lib/settings");

var _custom = _interopRequireDefault(require("./custom"));

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

var ViewedProducts = /*#__PURE__*/function (_React$Component) {
  _inherits(ViewedProducts, _React$Component);

  var _super = _createSuper(ViewedProducts);

  function ViewedProducts() {
    var _this;

    _classCallCheck(this, ViewedProducts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      viewedProducts: []
    });

    _defineProperty(_assertThisInitialized(_this), "getArrayFromLocalStorage", function () {
      var values = [];
      var viewedProducts = localStorage.getItem("viewedProducts");

      try {
        if (viewedProducts && viewedProducts.length > 0) {
          var viewedProductsParsed = JSON.parse(viewedProducts);

          if (Array.isArray(viewedProductsParsed)) {
            values = viewedProductsParsed;
          }
        }
      } catch (e) {//
      }

      return values;
    });

    _defineProperty(_assertThisInitialized(_this), "addProductIdToLocalStorage", function (productId) {
      if (productId && productId.length > 0) {
        var viewedProducts = _this.getArrayFromLocalStorage();

        if (viewedProducts.includes(productId)) {
          var index = viewedProducts.indexOf(productId);
          viewedProducts.splice(index, 1);
          viewedProducts.push(productId);
        } else {
          viewedProducts.push(productId);
        }

        localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));

        _this.setState({
          viewedProducts: viewedProducts
        });
      }
    });

    return _this;
  }

  _createClass(ViewedProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var product = this.props.product;
      var viewedProducts = this.getArrayFromLocalStorage();
      this.setState({
        viewedProducts: viewedProducts
      });

      if (product && product.id) {
        this.addProductIdToLocalStorage(product.id);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.product !== nextProps.product && nextProps.product && nextProps.product.id) {
        this.addProductIdToLocalStorage(nextProps.product.id);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.viewedProducts !== nextState.viewedProducts;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          limit = _this$props.limit,
          settings = _this$props.settings,
          addCartItem = _this$props.addCartItem,
          product = _this$props.product;
      var viewedProducts = this.state.viewedProducts;

      if (viewedProducts && product && product.id) {
        viewedProducts = viewedProducts.filter(function (id) {
          return id !== product.id;
        });
      }

      if (viewedProducts && viewedProducts.length > 0) {
        var ids = viewedProducts.reverse().slice(0, limit);
        return /*#__PURE__*/_react["default"].createElement("section", {
          className: "section section-product-related"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title is-4 has-text-centered"
        }, _settings.text.recentlyViewed), /*#__PURE__*/_react["default"].createElement(_custom["default"], {
          ids: ids,
          settings: settings,
          addCartItem: addCartItem,
          limit: limit,
          isCentered: true
        })));
      }

      return null;
    }
  }]);

  return ViewedProducts;
}(_react["default"].Component);

_defineProperty(ViewedProducts, "propTypes", {
  limit: _propTypes["default"].number.isRequired,
  settings: _propTypes["default"].shape({}).isRequired,
  addCartItem: _propTypes["default"].func.isRequired,
  product: _propTypes["default"].shape({}).isRequired
});

var _default = ViewedProducts;
exports["default"] = _default;