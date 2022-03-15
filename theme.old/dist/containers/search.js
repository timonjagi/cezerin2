"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _metaTags = _interopRequireDefault(require("../components/metaTags"));

var _productList = _interopRequireDefault(require("../components/productList"));

var _settings = require("../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchContainer = function SearchContainer(props) {
  var addCartItem = props.addCartItem,
      loadMoreProducts = props.loadMoreProducts,
      _props$state = props.state,
      products = _props$state.products,
      settings = _props$state.settings,
      productFilter = _props$state.productFilter,
      productsHasMore = _props$state.productsHasMore;
  var searchNotEmpty = productFilter.search && productFilter.search !== "";
  var searchDescription = searchNotEmpty ? "".concat(_settings.text.resultsFor, " \"").concat(productFilter.search, "\"") : _settings.text.search;
  var title = searchNotEmpty ? "".concat(productFilter.search, " - ").concat(_settings.text.search) : _settings.text.search;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_metaTags["default"], {
    title: title
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "hero is-light"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title is-4"
  }, searchDescription)))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_productList["default"], {
    products: products,
    addCartItem: addCartItem,
    settings: settings,
    loadMoreProducts: loadMoreProducts,
    hasMore: productsHasMore
  }))));
};

SearchContainer.propTypes = {
  addCartItem: _propTypes["default"].func.isRequired,
  loadMoreProducts: _propTypes["default"].func.isRequired,
  state: _propTypes["default"].shape({
    settings: _propTypes["default"].shape({}),
    products: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
    productFilter: _propTypes["default"].shape({}),
    productsHasMore: _propTypes["default"].bool
  }).isRequired
};
var _default = SearchContainer;
exports["default"] = _default;