"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lscache = _interopRequireDefault(require("lscache"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reduxForm = require("redux-form");

var _settings = require("../../lib/settings");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var validateRequired = function validateRequired(value) {
  return value && value.length > 0 ? undefined : _settings.text.required;
};

var validateEmail = function validateEmail(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? _settings.text.emailInvalid : undefined;
};

var ReadOnlyField = function ReadOnlyField(_ref) {
  var name = _ref.name,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkout-field-preview"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "name"
  }, name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "value"
  }, value));
};

var InputField = function InputField(field) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: field.className
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: field.id
  }, field.label, field.meta.touched && field.meta.error && /*#__PURE__*/_react["default"].createElement("span", {
    className: "error"
  }, field.meta.error)), /*#__PURE__*/_react["default"].createElement("input", _extends({}, field.input, {
    placeholder: field.placeholder,
    type: field.type,
    id: field.id,
    className: field.meta.touched && field.meta.error ? "invalid" : ""
  })));
};

var Account = /*#__PURE__*/function (_React$Component) {
  _inherits(Account, _React$Component);

  var _super = _createSuper(Account);

  function Account(props) {
    var _this;

    _classCallCheck(this, Account);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getField", function (fieldName) {
      var fields = _this.props.checkoutFields || [];
      var field = fields.find(function (item) {
        return item.name === fieldName;
      });
      return field;
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldStatus", function (fieldName) {
      var field = _this.getField(fieldName);

      return field && field.status ? field.status : "required";
    });

    _defineProperty(_assertThisInitialized(_this), "isFieldOptional", function (fieldName) {
      return _this.getFieldStatus(fieldName) === "optional";
    });

    _defineProperty(_assertThisInitialized(_this), "isFieldHidden", function (fieldName) {
      return _this.getFieldStatus(fieldName) === "hidden";
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldValidators", function (fieldName) {
      var isOptional = _this.isFieldOptional(fieldName);

      var validatorsArray = [];

      if (!isOptional) {
        validatorsArray.push(validateRequired);
      }

      if (fieldName === "email") {
        validatorsArray.push(validateEmail);
      }

      return validatorsArray;
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldPlaceholder", function (fieldName) {
      var field = _this.getField(fieldName);

      return field && field.placeholder && field.placeholder.length > 0 ? field.placeholder : "";
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldLabelText", function (fieldName) {
      var field = _this.getField(fieldName);

      if (field && field.label && field.label.length > 0) {
        return field.label;
      }

      switch (fieldName) {
        case "first_name":
          if (typeof _settings.text.first_name !== "undefined" && _settings.text.first_name != null) return _settings.text.first_name;
          return "";

        case "last_name":
          if (typeof _settings.text.last_name !== "undefined" && _settings.text.last_name != null) return _settings.text.last_name;
          return "";

        case "email":
          if (typeof _settings.text.email !== "undefined" && _settings.text.email != null) return _settings.text.email;
          return "";

        case "mobile":
          if (typeof _settings.text.mobile !== "undefined" && _settings.text.mobile != null) return _settings.text.mobile;
          return "";

        case "password":
          if (typeof _settings.text.password !== "undefined" && _settings.text.password != null) return _settings.text.password;
          return "";

        case "password_verify":
          if (typeof _settings.text.password_verify !== "undefined" && _settings.text.password_verify != null) return _settings.text.password_verify;
          return "";

        case "address1":
          if (typeof _settings.text.address1 !== "undefined" && _settings.text.address1 != null) return _settings.text.address1;
          return "";

        case "address2":
          if (typeof _settings.text.address2 !== "undefined" && _settings.text.address2 != null) return _settings.text.address2;
          return "";

        case "country":
          if (typeof _settings.text.country !== "undefined" && _settings.text.country != null) return _settings.text.country;
          return "";

        case "state":
          if (typeof _settings.text.state !== "undefined" && _settings.text.state != null) return _settings.text.state;
          return "";

        case "city":
          if (typeof _settings.text.city !== "undefined" && _settings.text.city != null) return _settings.text.city;
          return "";

        case "postal_code":
          if (typeof _settings.text.postal_code !== "undefined" && _settings.text.postal_code != null) return _settings.text.postal_code;
          return "";

        default:
          return "Unnamed field";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTableHeaderLabel", function (tableHeaderLabel) {
      switch (tableHeaderLabel) {
        case "product_image":
          return _settings.text.product_image;

        case "product_id":
          return _settings.text.order_line_id;

        case "variant_id":
          return _settings.text.product_variant_id;

        case "quantity":
          return _settings.text.product_qty;

        case "discount_total":
          return _settings.text.product_discount_total;

        case "name":
          return _settings.text.product_name;

        case "price":
          return _settings.text.product_price;

        case "price_total":
          return _settings.text.product_price_total;

        case "sku":
          return _settings.text.product_sku;

        case "tax_class":
          return _settings.text.product_tax_class;

        case "tax_total":
          return _settings.text.product_tax_total;

        case "variant_name":
          return _settings.text.product_variant_name;

        case "weight":
          return _settings.text.product_weight;

        default:
          return "Unnamed field";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldLabel", function (fieldName) {
      var labelText = _this.getFieldLabelText(fieldName);

      return _this.isFieldOptional(fieldName) ? "".concat(labelText, " (").concat(_settings.text.optional, ")") : labelText;
    });

    _defineProperty(_assertThisInitialized(_this), "handleProfile", function () {
      _this.setState({
        profileSection: 1,
        profileEdit: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOrderHistory", function () {
      _this.setState({
        profileSection: 2
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactsEdit", function () {
      _this.setState({
        profileEdit: true
      });
    });

    _this.state = {
      profileSection: 1,
      profileEdit: false,
      reinitialized: false,
      cartLayer: false
    };
    return _this;
  }

  _createClass(Account, [{
    key: "setInitialValues",
    value: function setInitialValues() {
      this.props.initialize({
        first_name: this.props.customerProperties.customer_settings.first_name,
        last_name: this.props.customerProperties.customer_settings.last_name,
        email: this.props.customerProperties.customer_settings.email,
        password: this.props.customerProperties.customer_settings.password,
        mobile: typeof this.props.customerProperties.customer_settings.mobile !== "undefined" && this.props.customerProperties.customer_settings.mobile !== null ? this.props.customerProperties.customer_settings.mobile : "",
        billing_address: {
          address1: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address1 !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address1 !== null ? this.props.customerProperties.customer_settings.addresses[0].address1 : "",
          address2: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address2 !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address2 !== null ? this.props.customerProperties.customer_settings.addresses[0].address2 : "",
          city: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].city !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].city !== null ? this.props.customerProperties.customer_settings.addresses[0].city : "",
          postal_code: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].postal_code !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].postal_code !== null ? this.props.customerProperties.customer_settings.addresses[0].postal_code : "",
          state: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].state !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].state !== null ? this.props.customerProperties.customer_settings.addresses[0].state : "",
          country: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].country !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].country !== null ? this.props.customerProperties.customer_settings.addresses[0].country : ""
        },
        shipping_address: {
          address1: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address1 !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address1 !== null ? this.props.customerProperties.customer_settings.addresses[0].address1 : "",
          address2: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address2 !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].address2 !== null ? this.props.customerProperties.customer_settings.addresses[0].address2 : "",
          city: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].city !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].city !== null ? this.props.customerProperties.customer_settings.addresses[0].city : "",
          postal_code: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].postal_code !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].postal_code !== null ? this.props.customerProperties.customer_settings.addresses[0].postal_code : "",
          state: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].state !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].state !== null ? this.props.customerProperties.customer_settings.addresses[0].state : "",
          country: typeof this.props.customerProperties.customer_settings.addresses !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].country !== "undefined" && this.props.customerProperties.customer_settings.addresses.length > 0 && this.props.customerProperties.customer_settings.addresses[0].country !== null ? this.props.customerProperties.customer_settings.addresses[0].country : ""
        }
      });
      this.setState({
        reinitialized: true
      });
      this.setState({
        emailValues: this.props.customerProperties.customer_settings.email
      });
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      _lscache["default"].flush();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          customerProperties = _this$props.customerProperties,
          cartlayerBtnInitialized = _this$props.cartlayerBtnInitialized,
          cart = _this$props.cart,
          initialValues = _this$props.initialValues;

      _lscache["default"].flushExpired();

      var accountInputField = "account-field";
      var accountForm = "account-form";
      var titleClassName = "login-title";
      var accountEditButtonClass = "account-button button";
      var accountHeaderMenueContainer = "account-header-menue-container";
      var accountHeaderMenueItems = "account-header-menue-items";
      var accountProfileContainer = "account-profile-container";
      var accountProfileList = "account-profile-list";
      var accountButtonContainer = "account-button-container";
      var continueShoppingButton = "continue-shopping-button account-button button";
      var accountProfileHeadline = "account-profile-headline";
      var isActive = "is-active";
      var billingAddress = {};
      var shippingAddress = {};
      var orderHistory = {};
      var list = [];
      var tableStyle = null;
      var keyCounter = 0;
      var listHeader = [];

      if (customerProperties === undefined || _lscache["default"].get("auth_data") === null) {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: {
            pathname: "/login"
          }
        });
      }

      if (customerProperties !== undefined && customerProperties.cartLayer && _lscache["default"].get("auth_data") !== null) {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: {
            pathname: "/checkout"
          }
        });
      }

      if (customerProperties !== undefined) {
        if (customerProperties.customer_settings && customerProperties.customer_settings.addresses) {
          ;
          [].slice.call(customerProperties.customer_settings.addresses).forEach(function (key, i) {
            if (i < 1) {
              billingAddress.address1 = key.address1;
              billingAddress.address2 = key.address2;
              billingAddress.city = key.city;
              billingAddress.postal_code = key.postal_code;
              billingAddress.state = key.state;
              billingAddress.country = key.country;
            }

            if (i > 0) {
              shippingAddress.address1 = key.address1;
              shippingAddress.address2 = key.address2;
              shippingAddress.city = key.city;
              shippingAddress.postal_code = key.postal_code;
              shippingAddress.state = key.state;
              shippingAddress.country = key.country;
            }
          });
          orderHistory = customerProperties.order_statuses.data.filter(function (obj) {
            return obj.draft !== true;
          }).reduce(function (map, obj, i) {
            obj.items.forEach(function (element) {
              element.product_id = obj.number;
            });
            map["ordered_items".concat(i)] = obj.items;
            return map;
          }, {});
        } // get all orders


        keyCounter = 0;

        for (var i in orderHistory) {
          listHeader = orderHistory[i].map(function (p, j) {
            if (j < 1) {
              return /*#__PURE__*/_react["default"].createElement("tr", {
                className: "tr-header",
                key: keyCounter
              }, Object.keys(p).map(function (k, l) {
                if (!["id", "variant_id"].includes(k)) {
                  return /*#__PURE__*/_react["default"].createElement("th", {
                    className: "td-header",
                    key: keyCounter + l
                  }, _this2.getTableHeaderLabel(k));
                }
              }));
            }
          });
          keyCounter++;
        }

        keyCounter = 0;

        for (var i in orderHistory) {
          list.push(orderHistory[i].map(function (p) {
            return /*#__PURE__*/_react["default"].createElement("tr", {
              className: "tr-body",
              key: "".concat(p.id).concat(i)
            }, Object.keys(p).map(function (k, d) {
              if (k.indexOf("product_image") !== -1) {
                var setCounter = i.replace(/^\D+/g, "");
                var urlContent = customerProperties.order_statuses.data[setCounter].landing_url.split(",");

                if (p.product_image === null) {
                  return /*#__PURE__*/_react["default"].createElement("td", {
                    className: "td-body",
                    key: "".concat(p.id).concat(k)
                  }, /*#__PURE__*/_react["default"].createElement("div", {
                    suppressContentEditableWarning: "true",
                    contentEditable: "false",
                    value: k
                  }, /*#__PURE__*/_react["default"].createElement("a", {
                    href: urlContent.length <= 1 ? customerProperties.order_statuses.data[setCounter].landing_url : urlContent[keyCounter++]
                  }, /*#__PURE__*/_react["default"].createElement("span", {
                    key: "".concat(p.id).concat(k)
                  }, _settings.text.no_image))));
                }

                return /*#__PURE__*/_react["default"].createElement("td", {
                  className: "td-body",
                  key: "".concat(p.id).concat(k)
                }, /*#__PURE__*/_react["default"].createElement("div", {
                  suppressContentEditableWarning: "true",
                  contentEditable: "false",
                  value: k
                }, /*#__PURE__*/_react["default"].createElement("a", {
                  href: urlContent.length <= 1 ? customerProperties.order_statuses.data[setCounter].landing_url : urlContent[keyCounter++]
                }, /*#__PURE__*/_react["default"].createElement("img", {
                  src: p[k][0].url,
                  alt: "thumbnail"
                }))));
              }

              if (!["id", "variant_id"].includes(k)) {
                return /*#__PURE__*/_react["default"].createElement("td", {
                  className: "td-body",
                  key: "".concat(p.id).concat(k)
                }, /*#__PURE__*/_react["default"].createElement("div", {
                  suppressContentEditableWarning: "true",
                  contentEditable: "false",
                  value: k
                }, p[k]));
              }
            }));
          }));
        }

        if (this.state.profileEdit && !this.state.reinitialized) {
          this.setInitialValues();
        }

        tableStyle = {
          align: "center"
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "account-container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "account-section"
        }, /*#__PURE__*/_react["default"].createElement("h2", {
          className: titleClassName
        }, _settings.text.welcome, " ", customerProperties.customer_settings.full_name)), /*#__PURE__*/_react["default"].createElement("div", {
          className: accountHeaderMenueContainer
        }, /*#__PURE__*/_react["default"].createElement("ul", {
          className: accountHeaderMenueItems
        }, /*#__PURE__*/_react["default"].createElement("li", {
          className: this.state.profileSection === 1 ? isActive : "",
          onClick: this.handleProfile
        }, _settings.text.profile), /*#__PURE__*/_react["default"].createElement("li", {
          className: this.state.profileSection === 2 ? isActive : "",
          onClick: this.handleOrderHistory
        }, _settings.text.orders), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: "/",
          style: {
            textDecoration: "none"
          },
          key: "logout",
          onClick: this.handleLogout
        }, _settings.text.logout)))), this.state.profileSection === 1 && !this.state.profileEdit && /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileContainer
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileList
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileHeadline
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "/assets/images/icons/person.svg",
          alt: "person-icon",
          className: "person-icon",
          style: {
            width: 25,
            height: 20
          }
        }), /*#__PURE__*/_react["default"].createElement("h4", null, _settings.text.account_profile_headline)), /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.member_since,
          value: new Date(customerProperties.customer_settings.date_created).toLocaleDateString("de-DE")
        }), /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.first_name,
          value: customerProperties.customer_settings.first_name
        }), /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.last_name,
          value: customerProperties.customer_settings.last_name
        }), /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.email,
          value: customerProperties.customer_settings.email
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileList
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileHeadline
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "/assets/images/icons/address.svg",
          alt: "person-icon",
          className: "person-icon",
          style: {
            width: 25,
            height: 20
          }
        }), /*#__PURE__*/_react["default"].createElement("h4", null, _settings.text.account_billing_headline)), Object.keys(billingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.address1,
          value: billingAddress.address1
        }), Object.keys(billingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.address2,
          value: billingAddress.address2
        }), Object.keys(billingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.city,
          value: billingAddress.city
        }), Object.keys(billingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.postal_code,
          value: billingAddress.postal_code
        }), Object.keys(billingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.state,
          value: billingAddress.state
        }), /*#__PURE__*/_react["default"].createElement("p", null, Object.keys(billingAddress).length === 0 ? _settings.text.empty : "")), /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileList
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileHeadline
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "/assets/images/icons/bag.svg",
          alt: "person-icon",
          className: "person-icon",
          style: {
            width: 25,
            height: 20
          }
        }), /*#__PURE__*/_react["default"].createElement("h4", null, _settings.text.shippingAddress)), Object.keys(shippingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.address1,
          value: shippingAddress.address1
        }), Object.keys(shippingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.address2,
          value: shippingAddress.address2
        }), Object.keys(shippingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.city,
          value: shippingAddress.city
        }), Object.keys(shippingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.postal_code,
          value: shippingAddress.postal_code
        }), Object.keys(shippingAddress).length > 0 && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.state,
          value: shippingAddress.state
        }), /*#__PURE__*/_react["default"].createElement("p", null, Object.keys(shippingAddress).length === 0 ? _settings.text.empty : ""))), this.state.profileSection === 1 && this.state.profileEdit && /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileContainer
        }, /*#__PURE__*/_react["default"].createElement("form", {
          onSubmit: handleSubmit,
          className: accountForm
        }, /*#__PURE__*/_react["default"].createElement("h3", {
          className: titleClassName
        }, _settings.text.edit_profile), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "first_name",
          id: "customer.first_name",
          autoComplete: "new-password",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("first_name"),
          validate: this.getFieldValidators("first_name"),
          placeholder: this.getFieldPlaceholder("first_name")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "last_name",
          id: "customer.last_name",
          autoComplete: "new-password",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("last_name"),
          validate: this.getFieldValidators("last_name"),
          placeholder: this.getFieldPlaceholder("last_name")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "email",
          id: "customer.email",
          autoComplete: "new-password",
          component: InputField // this.state.loggedin
          ,
          type: "email",
          label: this.getFieldLabel("email"),
          validate: this.getFieldValidators("email"),
          placeholder: this.getFieldPlaceholder("email")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "password",
          id: "customer.password",
          autoComplete: "new-password",
          component: InputField,
          type: "password",
          label: this.getFieldLabel("password"),
          validate: this.getFieldValidators("password"),
          placeholder: this.getFieldPlaceholder("password")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "password_verify",
          id: "customer.password_verify",
          autoComplete: "new-password",
          component: InputField,
          type: "password",
          label: this.getFieldLabel("password_verify"),
          validate: this.getFieldValidators("password_verify"),
          placeholder: this.getFieldPlaceholder("password_verify")
        }), /*#__PURE__*/_react["default"].createElement("h3", {
          className: titleClassName
        }, _settings.text.shippingAddress), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "shipping_address.address1",
          id: "shipping_address.address1",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("address1"),
          validate: this.getFieldValidators("address1"),
          placeholder: this.getFieldPlaceholder("address1")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "shipping_address.address2",
          id: "shipping_address.address2",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("address2"),
          placeholder: this.getFieldPlaceholder("address2")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "shipping_address.country",
          id: "shipping_address.country",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("country"),
          validate: this.getFieldValidators("country"),
          placeholder: this.getFieldPlaceholder("country")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "shipping_address.state",
          id: "shipping_address.state",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("state"),
          validate: this.getFieldValidators("state"),
          placeholder: this.getFieldPlaceholder("state")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "shipping_address.postal_code",
          id: "shipping_address.postal_code",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("postal_code"),
          validate: this.getFieldValidators("postal_code"),
          placeholder: this.getFieldPlaceholder("postal_code")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "shipping_address.city",
          id: "shipping_address.city",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("city"),
          validate: this.getFieldValidators("city"),
          placeholder: this.getFieldPlaceholder("city")
        }), /*#__PURE__*/_react["default"].createElement("h3", {
          className: titleClassName
        }, _settings.text.billingAddress), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "billing_address.address1",
          id: "billing_address.address1",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("address1"),
          validate: this.getFieldValidators("address1"),
          placeholder: this.getFieldPlaceholder("address1")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "billing_address.address2",
          id: "billing_address.address2",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("address2"),
          placeholder: this.getFieldPlaceholder("address2")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "billing_address.country",
          id: "billing_address.country",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("country"),
          validate: this.getFieldValidators("country"),
          placeholder: this.getFieldPlaceholder("country")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "billing_address.state",
          id: "billing_address.state",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("state"),
          validate: this.getFieldValidators("state"),
          placeholder: this.getFieldPlaceholder("state")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "billing_address.postal_code",
          id: "billing_address.postal_code",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("postal_code"),
          validate: this.getFieldValidators("postal_code"),
          placeholder: this.getFieldPlaceholder("postal_code")
        }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          className: accountInputField,
          name: "billing_address.city",
          id: "billing_address.city",
          component: InputField,
          type: "text",
          label: this.getFieldLabel("city"),
          validate: this.getFieldValidators("city"),
          placeholder: this.getFieldPlaceholder("city")
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-button-wrap"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "submit" // disabled={invalid}
          ,
          className: accountEditButtonClass
        }, _settings.text.save)))), this.state.profileSection === 2 && /*#__PURE__*/_react["default"].createElement("div", {
          className: accountProfileContainer
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "orders-history-container"
        }, /*#__PURE__*/_react["default"].createElement("fieldset", {
          className: "orders-history-fieldset"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "heading"
        }, Object.keys(orderHistory).length < 1 && /*#__PURE__*/_react["default"].createElement("p", null, _settings.text.order_history_empty), Object.keys(orderHistory).length > 0 && /*#__PURE__*/_react["default"].createElement("h4", null, _settings.text.order_history)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "schedule padd-lr"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "tbl-header"
        }, /*#__PURE__*/_react["default"].createElement("table", {
          cellPadding: "0",
          cellSpacing: "0",
          id: "mytable",
          style: tableStyle
        }, /*#__PURE__*/_react["default"].createElement("thead", null, listHeader))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "tbl-content"
        }, /*#__PURE__*/_react["default"].createElement("table", {
          cellPadding: "0",
          cellSpacing: "0",
          className: "orders-history-table",
          style: tableStyle
        }, /*#__PURE__*/_react["default"].createElement("tbody", null, list))))))), /*#__PURE__*/_react["default"].createElement("div", {
          className: accountButtonContainer
        }, this.state.profileSection !== 2 && /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          onClick: this.handleContactsEdit,
          className: accountEditButtonClass
        }, _settings.text.edit), /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: continueShoppingButton
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: "/",
          style: {
            textDecoration: "none"
          },
          key: "account-continue-shopping"
        }, _settings.text.continueshopping))));
      }
    }
  }]);

  return Account;
}(_react["default"].Component);

var _default = (0, _reduxForm.reduxForm)({
  form: "Account",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Account);

exports["default"] = _default;