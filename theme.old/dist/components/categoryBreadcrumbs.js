"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var helper = _interopRequireWildcard(require("../lib/helper"));

var _settings = require("../lib/settings");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CategoryBreadcrumbs = function CategoryBreadcrumbs(_ref) {
  var currentCategory = _ref.currentCategory,
      categories = _ref.categories;
  var items = helper.getCategoryBreadcrumbs(currentCategory.id, categories);
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "breadcrumb is-small",
    "aria-label": "breadcrumbs"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: "/"
  }, _settings.text.home)), items, /*#__PURE__*/_react["default"].createElement("li", {
    className: "is-active"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: currentCategory.path,
    "aria-current": "page"
  }, currentCategory.name))));
};

CategoryBreadcrumbs.propTypes = {
  currentCategory: _propTypes["default"].shape({}).isRequired,
  categories: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired
};
var _default = CategoryBreadcrumbs;
exports["default"] = _default;