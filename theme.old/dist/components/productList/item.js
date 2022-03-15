"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("../../lib/settings");

var _itemImage = _interopRequireDefault(require("./itemImage"));

var _itemPrice = _interopRequireDefault(require("./itemPrice"));

var _itemTags = _interopRequireDefault(require("./itemTags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Item = function Item(_ref) {
  var product = _ref.product,
      addCartItem = _ref.addCartItem,
      settings = _ref.settings,
      _ref$columnCountOnMob = _ref.columnCountOnMobile,
      columnCountOnMobile = _ref$columnCountOnMob === void 0 ? 2 : _ref$columnCountOnMob,
      _ref$columnCountOnTab = _ref.columnCountOnTablet,
      columnCountOnTablet = _ref$columnCountOnTab === void 0 ? 3 : _ref$columnCountOnTab,
      _ref$columnCountOnDes = _ref.columnCountOnDesktop,
      columnCountOnDesktop = _ref$columnCountOnDes === void 0 ? 4 : _ref$columnCountOnDes,
      _ref$columnCountOnWid = _ref.columnCountOnWidescreen,
      columnCountOnWidescreen = _ref$columnCountOnWid === void 0 ? 4 : _ref$columnCountOnWid,
      _ref$columnCountOnFul = _ref.columnCountOnFullhd,
      columnCountOnFullhd = _ref$columnCountOnFul === void 0 ? 4 : _ref$columnCountOnFul;
  var columnCount = 12;
  var columnSizeOnMobile = columnCount / columnCountOnMobile;
  var columnSizeOnTablet = columnCount / columnCountOnTablet;
  var columnSizeOnDesktop = columnCount / columnCountOnDesktop;
  var columnSizeOnWidescreen = columnCount / columnCountOnWidescreen;
  var columnSizeOnFullhd = columnCount / columnCountOnFullhd;
  var imageHeight = _settings.themeSettings.list_image_max_height && _settings.themeSettings.list_image_max_height > 0 ? _settings.themeSettings.list_image_max_height : "auto";
  var placeholderHeight = _settings.themeSettings.list_image_max_height && _settings.themeSettings.list_image_max_height > 0 ? _settings.themeSettings.list_image_max_height : 200;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "column is-".concat(columnSizeOnMobile, "-mobile is-").concat(columnSizeOnTablet, "-tablet is-").concat(columnSizeOnDesktop, "-desktop is-").concat(columnSizeOnWidescreen, "-widescreen is-").concat(columnSizeOnFullhd, "-fullhd ").concat(product.stock_status)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: product.path
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "image",
    style: {
      height: imageHeight
    }
  }, /*#__PURE__*/_react["default"].createElement(_itemTags["default"], {
    tags: product.tags
  }), /*#__PURE__*/_react["default"].createElement(_itemImage["default"], {
    images: product.images,
    productName: product.name,
    height: placeholderHeight
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content product-caption"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-name"
  }, product.name), /*#__PURE__*/_react["default"].createElement(_itemPrice["default"], {
    product: product,
    settings: settings
  }))));
};

var _default = Item;
exports["default"] = _default;