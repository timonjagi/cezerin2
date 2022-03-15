"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("../lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FooterMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(FooterMenu, _React$Component);

  var _super = _createSuper(FooterMenu);

  function FooterMenu(props) {
    var _this;

    _classCallCheck(this, FooterMenu);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isActiveToggle", function () {
      _this.setState({
        isActive: !_this.state.isActive
      });
    });

    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(FooterMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          items = _this$props.items;
      var ulItems = null;

      if (items && items.length > 0) {
        ulItems = items.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement("li", {
            key: index
          }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
            to: item.url || ""
          }, item.text));
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "column is-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer-title mobile-padding" + (this.state.isActive ? " footer-menu-open" : ""),
        onClick: this.isActiveToggle
      }, title, /*#__PURE__*/_react["default"].createElement("span", null)), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "footer-menu"
      }, ulItems));
    }
  }]);

  return FooterMenu;
}(_react["default"].Component);

var SocialIcons = function SocialIcons(_ref) {
  var icons = _ref.icons;

  if (icons && icons.length > 0) {
    var items = icons.map(function (icon, index) {
      return /*#__PURE__*/_react["default"].createElement("a", {
        key: index,
        href: icon.url || "",
        target: "_blank",
        rel: "noopener",
        title: icon.type,
        className: icon.type
      });
    });
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "social-icons"
    }, items);
  } else {
    return null;
  }
};

var Contacts = function Contacts(_ref2) {
  var contacts = _ref2.contacts;

  if (contacts && contacts.length > 0) {
    var items = contacts.map(function (item, index) {
      var contact = item ? item.text : null;

      if (contact && contact.indexOf("@") > 0) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "mailto:" + contact
        }, contact));
      } else {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, contact);
      }
    });
    return /*#__PURE__*/_react["default"].createElement("ul", {
      className: "footer-contacts"
    }, items);
  } else {
    return null;
  }
};

var Footer = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Footer, _React$PureComponent);

  var _super2 = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super2.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var settings = this.props.settings;
      var footerLogoUrl = _settings.themeSettings.footer_logo_url && _settings.themeSettings.footer_logo_url.length > 0 ? "/assets/images/" + _settings.themeSettings.footer_logo_url : settings.logo;
      return /*#__PURE__*/_react["default"].createElement("section", {
        className: "section section-footer"
      }, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "columns is-gapless"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "column is-5"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mobile-padding"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer-logo"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: footerLogoUrl,
        alt: "logo"
      })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("small", null, _settings.themeSettings.footer_about)), /*#__PURE__*/_react["default"].createElement(Contacts, {
        contacts: _settings.themeSettings.footer_contacts
      }), /*#__PURE__*/_react["default"].createElement(SocialIcons, {
        icons: _settings.themeSettings.footer_social
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "column is-1 is-hidden-mobile"
      }), /*#__PURE__*/_react["default"].createElement(FooterMenu, {
        title: _settings.themeSettings.footer_menu_1_title,
        items: _settings.themeSettings.footer_menu_1_items
      }), /*#__PURE__*/_react["default"].createElement(FooterMenu, {
        title: _settings.themeSettings.footer_menu_2_title,
        items: _settings.themeSettings.footer_menu_2_items
      }))))));
    }
  }]);

  return Footer;
}(_react["default"].PureComponent);

_defineProperty(Footer, "propTypes", {
  settings: _propTypes["default"].shape({}).isRequired
});

var _default = Footer;
exports["default"] = _default;