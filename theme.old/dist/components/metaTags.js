"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MetaTags = function MetaTags(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? null : _ref$title,
      description = _ref.description,
      canonicalUrl = _ref.canonicalUrl,
      imageUrl = _ref.imageUrl,
      ogType = _ref.ogType,
      ogTitle = _ref.ogTitle,
      ogDescription = _ref.ogDescription,
      jsonld = _ref.jsonld;
  var metaArray = [];
  var linkArray = [];

  if (description && description.length > 0) {
    metaArray.push({
      name: "description",
      content: description
    });
  }

  if (canonicalUrl && canonicalUrl.length > 0) {
    linkArray.push({
      rel: "canonical",
      href: canonicalUrl
    });
    metaArray.push({
      property: "og:url",
      content: canonicalUrl
    });
  }

  if (imageUrl && imageUrl.length > 0) {
    metaArray.push({
      property: "og:image",
      content: imageUrl
    });
    linkArray.push({
      rel: "image_src",
      href: imageUrl
    });
  }

  if (ogType && ogType.length > 0) {
    metaArray.push({
      property: "og:type",
      content: ogType
    });
  }

  if (ogTitle && ogTitle.length > 0) {
    metaArray.push({
      property: "og:title",
      content: ogTitle
    });
  }

  if (ogDescription && ogDescription.length > 0) {
    metaArray.push({
      property: "og:description",
      content: ogDescription
    });
  }

  var scriptJSONLD = jsonld && jsonld.length > 0 ? /*#__PURE__*/_react["default"].createElement("script", {
    type: "application/ld+json"
  }, jsonld) : null;
  return /*#__PURE__*/_react["default"].createElement(_reactHelmet["default"], {
    title: title,
    meta: metaArray,
    link: linkArray
  }, scriptJSONLD);
};

MetaTags.propTypes = {
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  canonicalUrl: _propTypes["default"].string,
  imageUrl: _propTypes["default"].string,
  ogType: _propTypes["default"].string,
  ogTitle: _propTypes["default"].string,
  ogDescription: _propTypes["default"].string,
  jsonld: _propTypes["default"].string
};
MetaTags.defaultProps = {
  title: null,
  description: null,
  canonicalUrl: null,
  imageUrl: null,
  ogType: null,
  ogTitle: null,
  ogDescription: null,
  jsonld: null
};
var _default = MetaTags;
exports["default"] = _default;