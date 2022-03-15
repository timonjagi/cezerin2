"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("../../lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var HeadMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(HeadMenuItem, _React$Component);

  var _super = _createSuper(HeadMenuItem);

  function HeadMenuItem(props) {
    var _this;

    _classCallCheck(this, HeadMenuItem);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onMouseEnterHandler", function () {
      if (!_this.props.isMobile && _this.props.level === 1) {
        _this.setState({
          isActive: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeaveHandler", function () {
      if (!_this.props.isMobile && _this.props.level === 1) {
        _this.setState({
          isActive: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isActiveToggle", function () {
      return _this.setState({
        isActive: !_this.state.isActive
      });
    });

    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(HeadMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          categories = _this$props.categories,
          category = _this$props.category,
          onClick = _this$props.onClick,
          level = _this$props.level,
          isMobile = _this$props.isMobile;
      var items = categories.filter(function (item) {
        return item.parent_id === category.id;
      }).map(function (subcategory, index) {
        return /*#__PURE__*/_react["default"].createElement(HeadMenuItem, {
          key: index,
          category: subcategory,
          onClick: onClick,
          categories: categories,
          level: level + 1,
          isMobile: isMobile
        });
      });
      var hasItems = items.length > 0;
      return /*#__PURE__*/_react["default"].createElement("li", {
        onMouseEnter: this.onMouseEnterHandler,
        onMouseLeave: this.onMouseLeaveHandler,
        onMouseUp: this.onMouseLeaveHandler,
        className: (level === 2 ? "column is-3" : "") + (this.state.isActive ? " is-active" : "") + (hasItems ? " has-items" : "")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "cat-parent"
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
        activeClassName: "is-active",
        className: hasItems ? "has-items" : "",
        to: category.path,
        onClick: onClick
      }, category.name), hasItems && isMobile && /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this.isActiveToggle
      })), hasItems && /*#__PURE__*/_react["default"].createElement("ul", {
        className: (level === 1 ? "columns is-gapless is-multiline" : "") + " nav-level-" + level
      }, items));
    }
  }]);

  return HeadMenuItem;
}(_react["default"].Component);

var HeadMenu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HeadMenu, _React$PureComponent);

  var _super2 = _createSuper(HeadMenu);

  function HeadMenu() {
    _classCallCheck(this, HeadMenu);

    return _super2.apply(this, arguments);
  }

  _createClass(HeadMenu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          categories = _this$props2.categories,
          onClick = _this$props2.onClick,
          isMobile = _this$props2.isMobile;
      var addItemsToMenu = [];

      if (_settings.themeSettings.header_menu && _settings.themeSettings.header_menu.length > 0) {
        addItemsToMenu = _settings.themeSettings.header_menu.map(function (item) {
          return {
            name: item.text,
            path: item.url,
            id: item.id || "",
            parent_id: item.parent_id || null
          };
        });
      }

      var menuItems = [].concat(_toConsumableArray(categories), _toConsumableArray(addItemsToMenu));
      var items = menuItems.filter(function (category) {
        return category.parent_id === null;
      }).map(function (category, index) {
        return /*#__PURE__*/_react["default"].createElement(HeadMenuItem, {
          key: index,
          category: category,
          onClick: onClick,
          categories: categories,
          level: 1,
          isMobile: isMobile
        });
      });
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "nav-level-0"
      }, items);
    }
  }]);

  return HeadMenu;
}(_react["default"].PureComponent);

var _default = HeadMenu;
exports["default"] = _default;