"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _homeSlider = _interopRequireDefault(require("../components/homeSlider"));

var _metaTags = _interopRequireDefault(require("../components/metaTags"));

var _custom = _interopRequireDefault(require("../components/products/custom"));

var _settings = require("../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IndexContainer = function IndexContainer(props) {
  var addCartItem = props.addCartItem,
      _props$state = props.state,
      pageDetails = _props$state.pageDetails,
      settings = _props$state.settings;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_metaTags["default"], {
    title: pageDetails.meta_title,
    description: pageDetails.meta_description,
    canonicalUrl: pageDetails.url,
    ogTitle: pageDetails.meta_title,
    ogDescription: pageDetails.meta_description
  }), /*#__PURE__*/_react["default"].createElement(_homeSlider["default"], {
    images: _settings.themeSettings.home_slider
  }), pageDetails.content && pageDetails.content.length > 10 && /*#__PURE__*/_react["default"].createElement("section", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: pageDetails.content
    }
  })))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title is-4 has-text-centered"
  }, _settings.themeSettings.home_products_title), /*#__PURE__*/_react["default"].createElement(_custom["default"], {
    sku: _settings.themeSettings.home_products_sku,
    sort: _settings.themeSettings.home_products_sort,
    limit: _settings.themeSettings.home_products_limit,
    settings: settings,
    addCartItem: addCartItem
  }))));
};

IndexContainer.propTypes = {
  addCartItem: _propTypes["default"].func.isRequired,
  state: _propTypes["default"].shape({
    settings: _propTypes["default"].shape({}),
    pageDetails: _propTypes["default"].shape({})
  }).isRequired
};
var _default = IndexContainer;
exports["default"] = _default;