"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactImageGallery = _interopRequireDefault(require("react-image-gallery"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("../lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderItem = function renderItem(item) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "image-gallery-image"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    to: item.path || ""
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: item.original,
    alt: item.title
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "caption",
    style: {
      color: _settings.themeSettings.home_slider_color || "#fff"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "caption-title"
  }, item.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "caption-description"
  }, item.description))));
};

var HomeSlider = function HomeSlider(_ref) {
  var images = _ref.images;

  if (images && images.length > 0) {
    var items = images.map(function (item) {
      return {
        original: "/assets/images/".concat(item.image),
        title: item.title,
        description: item.description,
        path: item.path || "",
        button: item.button
      };
    });
    return /*#__PURE__*/_react["default"].createElement("section", {
      className: "section",
      style: {
        padding: 0
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "home-slider"
    }, /*#__PURE__*/_react["default"].createElement(_reactImageGallery["default"], {
      items: items,
      lazyLoad: true,
      showThumbnails: false,
      slideInterval: 2000,
      showNav: _settings.themeSettings.home_gallery_shownav === true,
      showBullets: images.length > 1,
      showPlayButton: false,
      showFullscreenButton: false,
      slideOnThumbnailHover: false,
      renderItem: renderItem
    }))));
  }

  return null;
};

HomeSlider.propTypes = {
  images: _propTypes["default"].arrayOf(_propTypes["default"].shape({}))
};
HomeSlider.defaultProps = {
  images: null
};
var _default = HomeSlider;
exports["default"] = _default;