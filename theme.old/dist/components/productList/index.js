"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _item = _interopRequireDefault(require("./item"));

var _loadMore = _interopRequireDefault(require("./loadMore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductList = function ProductList(_ref) {
  var products = _ref.products,
      addCartItem = _ref.addCartItem,
      settings = _ref.settings,
      loadMoreProducts = _ref.loadMoreProducts,
      hasMore = _ref.hasMore,
      loadingProducts = _ref.loadingProducts,
      loadingMoreProducts = _ref.loadingMoreProducts,
      isCentered = _ref.isCentered,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "columns is-multiline is-mobile products" : _ref$className,
      columnCountOnMobile = _ref.columnCountOnMobile,
      columnCountOnTablet = _ref.columnCountOnTablet,
      columnCountOnDesktop = _ref.columnCountOnDesktop,
      columnCountOnWidescreen = _ref.columnCountOnWidescreen,
      columnCountOnFullhd = _ref.columnCountOnFullhd;
  var items = products ? products.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_item["default"], {
      key: product.id,
      product: product,
      addCartItem: addCartItem,
      settings: settings,
      columnCountOnMobile: columnCountOnMobile,
      columnCountOnTablet: columnCountOnTablet,
      columnCountOnDesktop: columnCountOnDesktop,
      columnCountOnWidescreen: columnCountOnWidescreen,
      columnCountOnFullhd: columnCountOnFullhd
    });
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: className + (loadingProducts ? " loading" : "") + (isCentered ? " is-centered" : "")
  }, items), /*#__PURE__*/_react["default"].createElement("div", {
    className: "load-more"
  }, /*#__PURE__*/_react["default"].createElement(_loadMore["default"], {
    loadMoreProducts: loadMoreProducts,
    hasMore: hasMore,
    loading: loadingMoreProducts
  })));
};

var _default = ProductList;
exports["default"] = _default;