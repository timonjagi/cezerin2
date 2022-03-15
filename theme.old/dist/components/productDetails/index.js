"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _settings = require("../../lib/settings");

var _viewed = _interopRequireDefault(require("../products/viewed"));

var _addToCartButton = _interopRequireDefault(require("./addToCartButton"));

var _attributes = _interopRequireDefault(require("./attributes"));

var _breadcrumbs = _interopRequireDefault(require("./breadcrumbs"));

var _discountCountdown = _interopRequireDefault(require("./discountCountdown"));

var _gallery = _interopRequireDefault(require("./gallery"));

var _options = _interopRequireDefault(require("./options"));

var _price = _interopRequireDefault(require("./price"));

var _quantity = _interopRequireDefault(require("./quantity"));

var _relatedProducts = _interopRequireDefault(require("./relatedProducts"));

var _tags = _interopRequireDefault(require("./tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Description = function Description(_ref) {
  var description = _ref.description;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-content",
    dangerouslySetInnerHTML: {
      __html: description
    }
  });
};

var ProductDetails = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductDetails, _React$Component);

  var _super = _createSuper(ProductDetails);

  function ProductDetails(props) {
    var _this;

    _classCallCheck(this, ProductDetails);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setQuantity", function (quantity) {
      _this.setState({
        quantity: quantity
      });
    });

    _this.state = {
      selectedOptions: {},
      selectedVariant: null,
      isAllOptionsSelected: false,
      quantity: 1
    };
    _this.onOptionChange = _this.onOptionChange.bind(_assertThisInitialized(_this));
    _this.findVariantBySelectedOptions = _this.findVariantBySelectedOptions.bind(_assertThisInitialized(_this));
    _this.addToCart = _this.addToCart.bind(_assertThisInitialized(_this));
    _this.checkSelectedOptions = _this.checkSelectedOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductDetails, [{
    key: "onOptionChange",
    value: function onOptionChange(optionId, valueId) {
      var selectedOptions = this.state.selectedOptions;

      if (valueId === "") {
        delete selectedOptions[optionId];
      } else {
        selectedOptions[optionId] = valueId;
      }

      this.setState({
        selectedOptions: selectedOptions
      });
      this.findVariantBySelectedOptions();
      this.checkSelectedOptions();
    }
  }, {
    key: "findVariantBySelectedOptions",
    value: function findVariantBySelectedOptions() {
      var selectedOptions = this.state.selectedOptions;
      var product = this.props.product;

      var _iterator = _createForOfIteratorHelper(product.variants),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var variant = _step.value;
          var variantMutchSelectedOptions = variant.options.every(function (variantOption) {
            return selectedOptions[variantOption.option_id] === variantOption.value_id;
          });

          if (variantMutchSelectedOptions) {
            this.setState({
              selectedVariant: variant
            });
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.setState({
        selectedVariant: null
      });
    }
  }, {
    key: "addToCart",
    value: function addToCart() {
      var _this$props = this.props,
          product = _this$props.product,
          addCartItem = _this$props.addCartItem;
      var _this$state = this.state,
          selectedVariant = _this$state.selectedVariant,
          quantity = _this$state.quantity;
      var item = {
        product_id: product.id,
        quantity: quantity
      };

      if (selectedVariant) {
        item.variant_id = selectedVariant.id;
      }

      addCartItem(item);
    }
  }, {
    key: "checkSelectedOptions",
    value: function checkSelectedOptions() {
      var selectedOptions = this.state.selectedOptions;
      var product = this.props.product;
      var allOptionsSelected = Object.keys(selectedOptions).length === product.options.length;
      this.setState({
        isAllOptionsSelected: allOptionsSelected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          product = _this$props2.product,
          settings = _this$props2.settings,
          categories = _this$props2.categories;
      var _this$state2 = this.state,
          selectedVariant = _this$state2.selectedVariant,
          isAllOptionsSelected = _this$state2.isAllOptionsSelected;
      var maxQuantity = product.stock_status === "discontinued" ? 0 : product.stock_backorder ? _settings.themeSettings.maxCartItemQty : selectedVariant ? selectedVariant.stock_quantity : product.stock_quantity;

      if (product) {
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
          className: "section section-product"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "columns"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-7"
        }, _settings.themeSettings.show_product_breadcrumbs && /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
          product: product,
          categories: categories
        }), /*#__PURE__*/_react["default"].createElement(_gallery["default"], {
          images: product.images
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-5"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "content"
        }, /*#__PURE__*/_react["default"].createElement(_tags["default"], {
          tags: product.tags
        }), /*#__PURE__*/_react["default"].createElement("h1", {
          className: "title is-4 product-name"
        }, product.name), /*#__PURE__*/_react["default"].createElement(_price["default"], {
          product: product,
          variant: selectedVariant,
          isAllOptionsSelected: isAllOptionsSelected,
          settings: settings
        }), _settings.themeSettings.show_discount_countdown && product.on_sale === true && /*#__PURE__*/_react["default"].createElement(_discountCountdown["default"], {
          product: product
        }), /*#__PURE__*/_react["default"].createElement(_options["default"], {
          options: product.options,
          onChange: this.onOptionChange
        }), /*#__PURE__*/_react["default"].createElement(_quantity["default"], {
          maxQuantity: maxQuantity,
          onChange: this.setQuantity
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "button-addtocart"
        }, /*#__PURE__*/_react["default"].createElement(_addToCartButton["default"], {
          product: product,
          variant: selectedVariant,
          addCartItem: this.addToCart,
          isAllOptionsSelected: isAllOptionsSelected
        }))))))), /*#__PURE__*/_react["default"].createElement("section", {
          className: "section section-product-description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "columns"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-7"
        }, /*#__PURE__*/_react["default"].createElement(Description, {
          description: product.description
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "column is-5"
        }, /*#__PURE__*/_react["default"].createElement(_attributes["default"], {
          attributes: product.attributes
        })))))), /*#__PURE__*/_react["default"].createElement(_relatedProducts["default"], {
          settings: settings,
          addCartItem: this.addToCart,
          ids: product.related_product_ids,
          limit: 10
        }), _settings.themeSettings.show_viewed_products && /*#__PURE__*/_react["default"].createElement(_viewed["default"], {
          settings: settings,
          addCartItem: this.addToCart,
          product: product,
          limit: _settings.themeSettings.limit_viewed_products || 4
        }));
      } else {
        return null;
      }
    }
  }]);

  return ProductDetails;
}(_react["default"].Component);

var _default = ProductDetails;
exports["default"] = _default;