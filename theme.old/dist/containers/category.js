"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _categoryBreadcrumbs = _interopRequireDefault(require("../components/categoryBreadcrumbs"));

var _metaTags = _interopRequireDefault(require("../components/metaTags"));

var _productFilter = _interopRequireDefault(require("../components/productFilter"));

var _productList = _interopRequireDefault(require("../components/productList"));

var _sort = _interopRequireDefault(require("../components/sort"));

var helper = _interopRequireWildcard(require("../lib/helper"));

var _settings = require("../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getFilterAttributesSummary = function getFilterAttributesSummary(productFilter) {
  var attributesSummary = "";

  if (productFilter.attributes) {
    Object.keys(productFilter.attributes).forEach(function (attributeKey) {
      var attributeName = attributeKey.replace("attributes.", "");
      var attributeValue = productFilter.attributes[attributeKey];
      var attributeValueFormatted = Array.isArray(attributeValue) ? attributeValue.join(", ") : attributeValue;
      attributesSummary += ". ".concat(attributeName, ": ").concat(attributeValueFormatted);
    });
  }

  return attributesSummary;
};

var getFilterPriceSummary = function getFilterPriceSummary(productFilter, settings) {
  var priceSummary = "";

  if (productFilter.priceFrom > 0 && productFilter.priceTo > 0) {
    var priceFrom = helper.formatCurrency(productFilter.priceFrom, settings);
    var priceTo = helper.formatCurrency(productFilter.priceTo, settings);
    priceSummary = ". ".concat(_settings.text.price, ": ").concat(priceFrom, " - ").concat(priceTo);
  }

  return priceSummary;
};

var CategoryHero = function CategoryHero(_ref) {
  var categoryDetails = _ref.categoryDetails,
      categories = _ref.categories;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "hero is-light"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, _settings.themeSettings.show_category_breadcrumbs && /*#__PURE__*/_react["default"].createElement(_categoryBreadcrumbs["default"], {
    currentCategory: categoryDetails,
    categories: categories
  }), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "category-title"
  }, categoryDetails.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "category-description is-hidden-mobile content",
    dangerouslySetInnerHTML: {
      __html: categoryDetails.description
    }
  }))));
};

CategoryHero.propTypes = {
  categoryDetails: _propTypes["default"].shape({}).isRequired,
  categories: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired
};

var CategoryContainer = function CategoryContainer(props) {
  var setSort = props.setSort,
      addCartItem = props.addCartItem,
      loadMoreProducts = props.loadMoreProducts,
      getJSONLD = props.getJSONLD,
      state = props.state,
      _props$state = props.state,
      products = _props$state.products,
      categoryDetails = _props$state.categoryDetails,
      settings = _props$state.settings,
      productFilter = _props$state.productFilter,
      productsHasMore = _props$state.productsHasMore,
      categories = _props$state.categories,
      loadingProducts = _props$state.loadingProducts,
      loadingMoreProducts = _props$state.loadingMoreProducts;
  var filterAttributesSummary = getFilterAttributesSummary(productFilter);
  var filterPriceSummary = getFilterPriceSummary(productFilter, settings);
  var pageTitle = categoryDetails.meta_title && categoryDetails.meta_title.length > 0 ? categoryDetails.meta_title : categoryDetails.name;
  var title = "".concat(pageTitle).concat(filterAttributesSummary).concat(filterPriceSummary);
  var jsonld = getJSONLD(state);
  var showFilter = _settings.themeSettings.show_product_filter;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_metaTags["default"], {
    title: title,
    description: categoryDetails.meta_description,
    canonicalUrl: categoryDetails.url,
    imageUrl: categoryDetails.image,
    ogType: "product.group",
    ogTitle: categoryDetails.name,
    ogDescription: categoryDetails.meta_description,
    jsonld: jsonld
  }), /*#__PURE__*/_react["default"].createElement(CategoryHero, {
    categoryDetails: categoryDetails,
    categories: categories
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "section section-category"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns"
  }, showFilter === true && /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-one-quarter left-sidebar"
  }, /*#__PURE__*/_react["default"].createElement(_productFilter["default"], props)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-hidden-mobile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-5"
  }, /*#__PURE__*/_react["default"].createElement(_sort["default"], {
    defaultSort: settings.default_product_sorting,
    currentSort: productFilter.sort,
    setSort: setSort
  }))), /*#__PURE__*/_react["default"].createElement(_productList["default"], {
    products: products,
    addCartItem: addCartItem,
    settings: settings,
    loadMoreProducts: loadMoreProducts,
    hasMore: productsHasMore,
    loadingProducts: loadingProducts,
    loadingMoreProducts: loadingMoreProducts
  }))))));
};

CategoryContainer.propTypes = {
  setSort: _propTypes["default"].func.isRequired,
  addCartItem: _propTypes["default"].func.isRequired,
  loadMoreProducts: _propTypes["default"].func.isRequired,
  getJSONLD: _propTypes["default"].func.isRequired,
  state: _propTypes["default"].shape({
    settings: _propTypes["default"].shape({}),
    products: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
    productFilter: _propTypes["default"].shape({}),
    productsHasMore: _propTypes["default"].bool,
    categoryDetails: _propTypes["default"].shape({}),
    categories: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
    loadingProducts: _propTypes["default"].bool,
    loadingMoreProducts: _propTypes["default"].bool
  }).isRequired
};
var _default = CategoryContainer;
exports["default"] = _default;