"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _metaTags = _interopRequireDefault(require("../components/metaTags"));

var _productDetails = _interopRequireDefault(require("../components/productDetails"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductContainer = function ProductContainer(props) {
  var addCartItem = props.addCartItem,
      getJSONLD = props.getJSONLD,
      _props$state = props.state,
      productDetails = _props$state.productDetails,
      settings = _props$state.settings,
      categories = _props$state.categories;

  if (productDetails) {
    var images = productDetails.images;
    var imageUrl = images && images.length > 0 ? images[0].url : null;
    var title = productDetails.meta_title && productDetails.meta_title.length > 0 ? productDetails.meta_title : productDetails.name;
    var jsonld = getJSONLD(props.state);
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_metaTags["default"], {
      title: title,
      description: productDetails.meta_description,
      canonicalUrl: productDetails.url,
      imageUrl: imageUrl,
      ogType: "product",
      ogTitle: productDetails.name,
      ogDescription: productDetails.meta_description,
      jsonld: jsonld
    }), /*#__PURE__*/_react["default"].createElement(_productDetails["default"], {
      settings: settings,
      product: productDetails,
      addCartItem: addCartItem,
      categories: categories
    }));
  }

  return null;
};

ProductContainer.propTypes = {
  getJSONLD: _propTypes["default"].func.isRequired,
  addCartItem: _propTypes["default"].func.isRequired,
  state: _propTypes["default"].shape({
    settings: _propTypes["default"].shape({}),
    productDetails: _propTypes["default"].shape({}),
    categories: _propTypes["default"].arrayOf(_propTypes["default"].shape({}))
  }).isRequired
};
var _default = ProductContainer;
exports["default"] = _default;