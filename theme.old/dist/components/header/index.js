"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lscache = _interopRequireDefault(require("lscache"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _settings = require("../../lib/settings");

var _cart = _interopRequireDefault(require("./cart"));

var _cartIndicator = _interopRequireDefault(require("./cartIndicator"));

var _headMenu = _interopRequireDefault(require("./headMenu"));

var _login = _interopRequireDefault(require("./login"));

var _searchBox = _interopRequireDefault(require("./searchBox"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Logo = function Logo(_ref) {
  var src = _ref.src,
      onClick = _ref.onClick,
      alt = _ref.alt;
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    className: "logo-image",
    to: "/",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: src,
    alt: alt
  }));
};

var BurgerButton = function BurgerButton(_ref2) {
  var onClick = _ref2.onClick,
      className = _ref2.className;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: className,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", null), /*#__PURE__*/_react["default"].createElement("span", null), /*#__PURE__*/_react["default"].createElement("span", null));
};

var BackButton = function BackButton(_ref3) {
  var onClick = _ref3.onClick;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "navbar-item is-hidden-tablet is-flex-mobile",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "icon",
    src: "/assets/images/arrow_back.svg",
    style: {
      width: 18
    }
  }));
};

var state = {
  MENU: "menu",
  CART: "cart",
  SITE: "site"
};

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "mobileMenuIsActive", function () {
      return _this.state.siteState === state.MENU;
    });

    _defineProperty(_assertThisInitialized(_this), "cartIsActive", function () {
      return _this.state.siteState === state.CART;
    });

    _defineProperty(_assertThisInitialized(_this), "menuToggle", function () {
      var newState = _this.state.siteState == state.MENU ? state.SITE : state.MENU;

      _this.setSiteState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "searchToggle", function () {
      _this.setState({
        mobileSearchIsActive: !_this.state.mobileSearchIsActive
      });

      document.body.classList.toggle("search-active");
    });

    _defineProperty(_assertThisInitialized(_this), "cartToggle", function () {
      var newState = _this.state.siteState == state.CART ? state.SITE : state.CART;

      _this.setSiteState(newState);

      if (_this.props.state.cart && _this.props.state.cart.items && _this.props.state.cart.items.length > 0) {
        _this.props.cartLayerInitialized({
          cartlayerBtnInitialized: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLogin", function () {
      _lscache["default"].flushExpired();

      if (_lscache["default"].get("auth_data") === null) {
        _this.props.loggedinUserTimeUp({
          authenticated: false
        });

        _this.props.setLocation("/login");
      } else {
        _this.props.customerData({
          token: _lscache["default"].get("auth_data")
        });

        _this.props.setLocation("/customer-account");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (search) {
      if (_this.props.state.currentPage.path === "/search") {
        _this.props.setSearch(search);
      } else {
        if (search && search !== "") {
          _this.props.setLocation("/search?search=" + search);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleGoBack", function () {
      _this.setSiteState(state.SITE);

      _this.props.goBack();
    });

    _this.state = {
      siteState: state.SITE,
      mobileSearchIsActive: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.state.cart !== nextProps.state.cart && this.props.state.currentPage.path !== "/checkout") {
        this.setSiteState(state.CART);
      }
    }
  }, {
    key: "setSiteState",
    value: function setSiteState(state) {
      this.setState({
        siteState: state
      });
      this.handleState(state);
    }
  }, {
    key: "handleState",
    value: function handleState(newState) {
      switch (newState) {
        case state.CART:
          document.body.classList.add("noscroll");

          if (this.state.mobileSearchIsActive) {
            this.searchToggle();
          }

          break;

        case state.MENU:
          document.body.classList.add("noscroll");
          break;

        case state.SITE:
          document.body.classList.remove("noscroll");
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$state = this.props.state,
          categories = _this$props$state.categories,
          cart = _this$props$state.cart,
          settings = _this$props$state.settings,
          currentPage = _this$props$state.currentPage,
          location = _this$props$state.location,
          productFilter = _this$props$state.productFilter,
          cartlayerBtnInitialized = _this$props$state.cartlayerBtnInitialized;
      var classToggle = this.mobileMenuIsActive() ? "navbar-burger is-hidden-tablet is-active" : "navbar-burger is-hidden-tablet";
      var showBackButton = currentPage.type === "product" && location.hasHistory;
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("header", {
        className: this.state.mobileSearchIsActive ? "search-active" : ""
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "columns is-gapless is-mobile header-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "column is-4 column-burger"
      }, !showBackButton && /*#__PURE__*/_react["default"].createElement(BurgerButton, {
        onClick: this.menuToggle,
        className: classToggle
      }), showBackButton && /*#__PURE__*/_react["default"].createElement(BackButton, {
        onClick: this.handleGoBack
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "column is-4 has-text-centered column-logo"
      }, /*#__PURE__*/_react["default"].createElement(Logo, {
        src: settings.logo,
        onClick: function onClick() {
          return _this2.setSiteState(state.SITE);
        },
        alt: "logo"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "column is-4 has-text-right header-block-right"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon icon-search is-hidden-tablet",
        onClick: this.searchToggle
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/assets/images/search.svg",
        alt: _settings.text.search,
        title: _settings.text.search,
        style: {
          minWidth: 24
        }
      })), /*#__PURE__*/_react["default"].createElement(_searchBox["default"], {
        value: productFilter.search,
        onSearch: this.handleSearch,
        className: this.state.mobileSearchIsActive ? "search-active" : ""
      }), /*#__PURE__*/_react["default"].createElement(_login["default"], {
        onClick: this.handleLogin
      }), /*#__PURE__*/_react["default"].createElement(_cartIndicator["default"], {
        cart: cart,
        onClick: this.cartToggle,
        cartIsActive: this.cartIsActive(),
        cartlayerBtnInitialized: cartlayerBtnInitialized
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: this.cartIsActive() ? "mini-cart-open" : ""
      }, /*#__PURE__*/_react["default"].createElement(_cart["default"], {
        cart: cart,
        deleteCartItem: this.props.deleteCartItem,
        settings: settings,
        cartToggle: this.cartToggle,
        cartlayerBtnInitialized: cartlayerBtnInitialized
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "primary-nav is-hidden-mobile"
      }, /*#__PURE__*/_react["default"].createElement(_headMenu["default"], {
        categories: categories,
        location: location,
        isMobile: false
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: this.mobileMenuIsActive() || this.cartIsActive() ? "dark-overflow" : "",
        onClick: function onClick() {
          return _this2.setSiteState(state.SITE);
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mobile-nav is-hidden-tablet" + (this.mobileMenuIsActive() ? " mobile-nav-open" : "")
      }, /*#__PURE__*/_react["default"].createElement(_headMenu["default"], {
        isMobile: true,
        categories: categories,
        location: location,
        onClick: function onClick() {
          return _this2.setSiteState(state.SITE);
        }
      })));
    }
  }]);

  return Header;
}(_react["default"].Component);

var _default = Header;
exports["default"] = _default;