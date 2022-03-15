"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _api = _interopRequireDefault(require("../../lib/api"));

var _productList = _interopRequireDefault(require("../productList"));

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

var CustomProducts = /*#__PURE__*/function (_React$Component) {
  _inherits(CustomProducts, _React$Component);

  var _super = _createSuper(CustomProducts);

  function CustomProducts() {
    var _this;

    _classCallCheck(this, CustomProducts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      products: []
    });

    _defineProperty(_assertThisInitialized(_this), "fetchProducts", function (_ref) {
      var ids = _ref.ids,
          sku = _ref.sku,
          sort = _ref.sort,
          limit = _ref.limit,
          category_id = _ref.category_id,
          tags = _ref.tags,
          attributes = _ref.attributes,
          price_from = _ref.price_from,
          price_to = _ref.price_to,
          on_sale = _ref.on_sale;
      var filter = {
        ids: ids,
        sku: sku,
        tags: tags,
        on_sale: on_sale,
        search: null,
        category_id: category_id,
        price_from: price_from,
        price_to: price_to,
        sort: sort,
        fields: "path,id,name,category_id,category_name,sku,images,enabled,discontinued,stock_status,stock_quantity,price,on_sale,regular_price,attributes,tags",
        limit: limit || 4,
        offset: 0
      };

      if (attributes && Array.isArray(attributes) && attributes.length > 0) {
        attributes.forEach(function (attr) {
          filter["attributes.".concat(attr.name)] = attr.value;
        });
      }

      _api["default"].ajax.products.list(filter).then(function (_ref2) {
        var json = _ref2.json;

        if (!_this.isCancelled) {
          _this.setState({
            products: json.data
          });
        }
      })["catch"](function () {});
    });

    return _this;
  }

  _createClass(CustomProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isCancelled = false;
      this.fetchProducts(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.fetchProducts(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isCancelled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.settings,
          addCartItem = _this$props.addCartItem,
          isCentered = _this$props.isCentered,
          className = _this$props.className,
          columnCountOnMobile = _this$props.columnCountOnMobile,
          columnCountOnTablet = _this$props.columnCountOnTablet,
          columnCountOnDesktop = _this$props.columnCountOnDesktop,
          columnCountOnWidescreen = _this$props.columnCountOnWidescreen,
          columnCountOnFullhd = _this$props.columnCountOnFullhd;
      var products = this.state.products;
      return /*#__PURE__*/_react["default"].createElement(_productList["default"], {
        products: products,
        addCartItem: addCartItem,
        settings: settings,
        loadMoreProducts: null,
        hasMore: false,
        columnCountOnMobile: columnCountOnMobile,
        columnCountOnTablet: columnCountOnTablet,
        columnCountOnDesktop: columnCountOnDesktop,
        columnCountOnWidescreen: columnCountOnWidescreen,
        columnCountOnFullhd: columnCountOnFullhd,
        isCentered: isCentered,
        className: className
      });
    }
  }]);

  return CustomProducts;
}(_react["default"].Component);

_defineProperty(CustomProducts, "propTypes", {
  ids: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  sku: _propTypes["default"].string,
  sort: _propTypes["default"].string,
  limit: _propTypes["default"].number.isRequired,
  category_id: _propTypes["default"].string,
  tags: _propTypes["default"].string,
  attributes: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].string.isRequired
  })),
  price_from: _propTypes["default"].number,
  price_to: _propTypes["default"].number,
  on_sale: _propTypes["default"].bool,
  settings: _propTypes["default"].shape({}).isRequired,
  addCartItem: _propTypes["default"].func.isRequired,
  isCentered: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  columnCountOnMobile: _propTypes["default"].number,
  columnCountOnTablet: _propTypes["default"].number,
  columnCountOnDesktop: _propTypes["default"].number,
  columnCountOnWidescreen: _propTypes["default"].number,
  columnCountOnFullhd: _propTypes["default"].number
});

_defineProperty(CustomProducts, "defaultProps", {
  ids: null,
  sku: null,
  sort: null,
  category_id: null,
  tags: null,
  attributes: null,
  price_from: null,
  price_to: null,
  on_sale: null,
  isCentered: true,
  className: "columns is-multiline is-mobile products",
  columnCountOnMobile: 2,
  columnCountOnTablet: 3,
  columnCountOnDesktop: 4,
  columnCountOnWidescreen: 4,
  columnCountOnFullhd: 4
});

var _default = CustomProducts;
exports["default"] = _default;