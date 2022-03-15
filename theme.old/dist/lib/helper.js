"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThumbnailUrl = exports.getShippingMethodFromOrder = exports.getShippingFieldLabelOrderSuccess = exports.getShippingFieldLabel = exports.getProductBreadcrumbs = exports.getPaymentMethodFromOrder = exports.getParentIds = exports.getFieldLabelByKey = exports.getCheckoutFieldLabel = exports.getCategoryBreadcrumbs = exports.formatNumber = exports.formatCurrency = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("./settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var formatNumber = function formatNumber(number, settings) {
  var x = 3;
  var floatNumber = parseFloat(number || 0) || 0;
  var re = "\\d(?=(\\d{".concat(x, "})+").concat(settings.decimal_number > 0 ? "\\D" : "$", ")");
  var num = floatNumber.toFixed(Math.max(0, Math.floor(settings.decimal_number)));
  return (settings.decimal_separator ? num.replace(".", settings.decimal_separator) : num).replace(new RegExp(re, "g"), "$&".concat(settings.thousand_separator));
};

exports.formatNumber = formatNumber;
var amountPattern = "{amount}";

var formatCurrency = function formatCurrency() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var settings = arguments.length > 1 ? arguments[1] : undefined;
  return settings.currency_format.replace(amountPattern, formatNumber(number, settings));
};

exports.formatCurrency = formatCurrency;

var getThumbnailUrl = function getThumbnailUrl(originalUrl, width) {
  if (originalUrl && originalUrl.length > 0) {
    var pos = originalUrl.lastIndexOf("/");
    var thumbnailUrl = "".concat(originalUrl.substring(0, pos), "/").concat(width, "/").concat(originalUrl.substring(pos + 1));
    return thumbnailUrl;
  }

  return "";
};

exports.getThumbnailUrl = getThumbnailUrl;

var getParentIds = function getParentIds(categories, id) {
  var categoryId = id;
  var parentIds = [];
  var parentExists = false;

  do {
    var category = categories.find(function (item) {
      return item.id === categoryId;
    });
    parentExists = category && category.parent_id;

    if (parentExists) {
      parentIds.push(category.parent_id);
      categoryId = category.parent_id;
    }
  } while (parentExists);

  return parentIds;
};

exports.getParentIds = getParentIds;

var getProductBreadcrumbs = function getProductBreadcrumbs(product, categories) {
  if (product && product.category_id) {
    var ids = [product.category_id];
    var parentIds = getParentIds(categories, product.category_id);
    ids.push.apply(ids, _toConsumableArray(parentIds));
    var index = 0;
    var breadcrumbs = ids.reverse().map(function (categoryId) {
      var category = categories.find(function (item) {
        return item.id === categoryId;
      });

      if (category) {
        index += 1;
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
          to: category.path
        }, category.name));
      }

      return null;
    }).filter(function (item) {
      return !!item;
    });
    return breadcrumbs;
  }

  return null;
};

exports.getProductBreadcrumbs = getProductBreadcrumbs;

var getCategoryBreadcrumbs = function getCategoryBreadcrumbs(currentCategoryId, categories) {
  if (currentCategoryId) {
    var ids = getParentIds(categories, currentCategoryId);
    var index = 0;
    var breadcrumbs = ids.reverse().map(function (categoryId) {
      var category = categories.find(function (item) {
        return item.id === categoryId;
      });

      if (category) {
        index += 1;
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
          to: category.path
        }, category.name));
      }

      return null;
    }).filter(function (item) {
      return !!item;
    });
    return breadcrumbs;
  }

  return null;
};

exports.getCategoryBreadcrumbs = getCategoryBreadcrumbs;

var getShippingMethodFromOrder = function getShippingMethodFromOrder(order, shippingMethods) {
  if (order && order.shipping_method_id && shippingMethods && shippingMethods.length > 0) {
    return shippingMethods.find(function (method) {
      return method.id === order.shipping_method_id;
    });
  }

  return null;
};

exports.getShippingMethodFromOrder = getShippingMethodFromOrder;

var getPaymentMethodFromOrder = function getPaymentMethodFromOrder(order, paymentMethods) {
  if (order && order.shipping_method_id && paymentMethods && paymentMethods.length > 0) {
    return paymentMethods.find(function (method) {
      return method.id === order.payment_method_id;
    });
  }

  return null;
};

exports.getPaymentMethodFromOrder = getPaymentMethodFromOrder;

var getFieldLabelByKey = function getFieldLabelByKey(key) {
  switch (key) {
    case "full_name":
      return _settings.text.full_name;

    case "address1":
      return _settings.text.address1;

    case "address2":
      return _settings.text.address2;

    case "postal_code":
      return _settings.text.postal_code;

    case "phone":
      return _settings.text.phone;

    case "company":
      return _settings.text.company;

    case "password":
      return _settings.text.password;

    case "mobile":
      return _settings.text.mobile;

    case "city":
      return _settings.text.city;

    case "state":
      return _settings.text.state;

    case "country":
      return _settings.text.country;

    case "comments":
      return _settings.text.comments;

    default:
      return "";
  }
};

exports.getFieldLabelByKey = getFieldLabelByKey;

var getShippingFieldLabelOrderSuccess = function getShippingFieldLabelOrderSuccess(key) {
  return getFieldLabelByKey(key);
};

exports.getShippingFieldLabelOrderSuccess = getShippingFieldLabelOrderSuccess;

var getShippingFieldLabel = function getShippingFieldLabel(_ref) {
  var label = _ref.label,
      key = _ref.key;
  return label && label.length > 0 ? label : getFieldLabelByKey(key);
};

exports.getShippingFieldLabel = getShippingFieldLabel;

var getCheckoutFieldLabel = function getCheckoutFieldLabel(_ref2) {
  var label = _ref2.label,
      name = _ref2.name;
  return label && label.length > 0 ? label : getFieldLabelByKey(name);
};

exports.getCheckoutFieldLabel = getCheckoutFieldLabel;