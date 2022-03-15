"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lscache = _interopRequireDefault(require("lscache"));

var _react = _interopRequireDefault(require("react"));

var _reduxForm = require("redux-form");

var _helper = require("../../lib/helper");

var _settings = require("../../lib/settings");

var _inputField = _interopRequireDefault(require("./inputField"));

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

var CheckoutStepContacts = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckoutStepContacts, _React$Component);

  var _super = _createSuper(CheckoutStepContacts);

  function CheckoutStepContacts(props) {
    var _this;

    _classCallCheck(this, CheckoutStepContacts);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "passwordTemp", function (value) {
      _this.setState({
        comparePassword: value.currentTarget.defaultValue
      });
    });

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

      if (fieldName === "password_verify") {
        validatorsArray.push(_this.confirmPassword);
      }

      return validatorsArray;
    });

    _defineProperty(_assertThisInitialized(_this), "confirmPassword", function (value) {
      if (value !== _this.state.comparePassword) {
        return _settings.text.password_verify_failed;
      }

      return undefined;
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

    _defineProperty(_assertThisInitialized(_this), "getFieldLabel", function (fieldName) {
      var labelText = _this.getFieldLabelText(fieldName);

      return _this.isFieldOptional(fieldName) ? "".concat(labelText, " (").concat(_settings.text.optional, ")") : labelText;
    });

    _this.state = {
      loggedin: false,
      reinitialized: false,
      emailValues: "",
      comparePassword: ""
    };
    _this.setInitialValues = _this.setInitialValues.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckoutStepContacts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_lscache["default"].get("auth_data") !== null) {
        this.setState({
          loggedin: true
        });
      }
    }
  }, {
    key: "setInitialValues",
    value: function setInitialValues() {
      _lscache["default"].flushExpired();

      if (_lscache["default"].get("auth_data") !== null) {
        this.props.initialize({
          first_name: this.props.customerProperties.customer_settings.first_name,
          last_name: this.props.customerProperties.customer_settings.last_name,
          email: this.props.customerProperties.customer_settings.email,
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
      }

      this.setState({
        reinitialized: true
      });
      this.setState({
        emailValues: this.props.customerProperties.customer_settings.email
      }); // this.props.change("input", {disabled: true});
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          customerProperties = _this$props.customerProperties,
          pristine = _this$props.pristine,
          invalid = _this$props.invalid,
          valid = _this$props.valid,
          reset = _this$props.reset,
          submitting = _this$props.submitting,
          loadingShippingMethods = _this$props.loadingShippingMethods,
          loadingPaymentMethods = _this$props.loadingPaymentMethods,
          initialValues = _this$props.initialValues,
          settings = _this$props.settings,
          saveShippingLocation = _this$props.saveShippingLocation,
          saveShippingMethod = _this$props.saveShippingMethod,
          savePaymentMethod = _this$props.savePaymentMethod,
          paymentMethods = _this$props.paymentMethods,
          shippingMethods = _this$props.shippingMethods,
          inputClassName = _this$props.inputClassName,
          buttonClassName = _this$props.buttonClassName,
          editButtonClassName = _this$props.editButtonClassName,
          onEdit = _this$props.onEdit,
          isReadOnly = _this$props.isReadOnly,
          title = _this$props.title;

      if (customerProperties !== undefined && !this.state.reinitialized && this.state.loggedin) {
        this.setInitialValues();
      }

      if (isReadOnly) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-step"
        }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "1"), title), !this.isFieldHidden("first_name") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.first_name,
          value: initialValues.first_name
        }), !this.isFieldHidden("last_name") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.last_name,
          value: initialValues.last_name
        }), !this.isFieldHidden("email") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.email,
          value: initialValues.email
        }), !this.isFieldHidden("mobile") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.mobile,
          value: initialValues.mobile
        }), !this.isFieldHidden("address1") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.address1,
          value: initialValues.shipping_address.address1
        }), !this.isFieldHidden("address2") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.address2,
          value: initialValues.shipping_address.address2
        }), !this.isFieldHidden("country") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.country,
          value: initialValues.shipping_address.country
        }), !this.isFieldHidden("state") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.state,
          value: initialValues.shipping_address.state
        }), !this.isFieldHidden("postal_code") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.postal_code,
          value: initialValues.shipping_address.postal_code
        }), !this.isFieldHidden("city") && /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.city,
          value: initialValues.shipping_address.city
        }), /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.shippingMethod,
          value: initialValues.shipping_method
        }), /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
          name: _settings.text.paymentMethod,
          value: initialValues.payment_method
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-button-wrap"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          onClick: onEdit,
          className: editButtonClassName
        }, _settings.text.edit)), /*#__PURE__*/_react["default"].createElement("h2", null, _settings.text.shippingMethods, " ", loadingShippingMethods && /*#__PURE__*/_react["default"].createElement("small", null, _settings.text.loading)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "shipping-methods"
        }, shippingMethods.map(function (method, index) {
          return /*#__PURE__*/_react["default"].createElement("label", {
            key: index,
            className: "shipping-method".concat(method.id === initialValues.shipping_method_id ? " active" : "")
          }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
            name: "shipping_method_id",
            component: "input",
            type: "radio",
            value: method.id,
            onClick: function onClick() {
              saveShippingMethod(method.id);
            }
          }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
            className: "shipping-method-name"
          }, method.name), /*#__PURE__*/_react["default"].createElement("div", {
            className: "shipping-method-description"
          }, method.description)), /*#__PURE__*/_react["default"].createElement("span", {
            className: "shipping-method-rate"
          }, (0, _helper.formatCurrency)(method.price, settings)));
        })), /*#__PURE__*/_react["default"].createElement("h2", null, _settings.text.paymentMethods, " ", loadingPaymentMethods && /*#__PURE__*/_react["default"].createElement("small", null, _settings.text.loading)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "payment-methods"
        }, paymentMethods.map(function (method, index) {
          return /*#__PURE__*/_react["default"].createElement("label", {
            key: index,
            className: "payment-method".concat(method.id === initialValues.payment_method_id ? " active" : "")
          }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
            name: "payment_method_id",
            validate: [validateRequired],
            component: "input",
            type: "radio",
            value: method.id,
            onClick: function onClick() {
              savePaymentMethod(method.id);
            }
          }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
            className: "payment-method-name"
          }, method.name), /*#__PURE__*/_react["default"].createElement("div", {
            className: "payment-method-description"
          }, method.description)), /*#__PURE__*/_react["default"].createElement("span", {
            className: "payment-method-logo"
          }));
        })));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "checkout-step"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "1"), title), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: handleSubmit
      }, !this.isFieldHidden("first_name") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "first_name",
        id: "customer.first_name",
        autoComplete: "new-password",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("first_name"),
        validate: this.getFieldValidators("first_name"),
        placeholder: this.getFieldPlaceholder("first_name")
      }), !this.isFieldHidden("last_name") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "last_name",
        id: "customer.last_name",
        autoComplete: "new-password",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("last_name"),
        validate: this.getFieldValidators("last_name"),
        placeholder: this.getFieldPlaceholder("last_name")
      }), this.state.loggedin ? /*#__PURE__*/_react["default"].createElement(ReadOnlyField, {
        name: _settings.text.email,
        value: this.state.emailValues,
        className: "logged-in-email-field",
        label: this.getFieldLabel("email")
      }) : !this.isFieldHidden("email") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "email",
        id: "customer.email",
        autoComplete: "new-password",
        component: _inputField["default"] // this.state.loggedin
        ,
        type: "email",
        label: this.getFieldLabel("email"),
        validate: this.getFieldValidators("email"),
        placeholder: this.getFieldPlaceholder("email")
      }), !this.isFieldHidden("mobile") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "mobile",
        id: "customer.mobile",
        autocomplete: "new-password",
        component: _inputField["default"],
        type: "tel",
        label: this.getFieldLabel("mobile"),
        validate: this.getFieldValidators("mobile"),
        placeholder: this.getFieldPlaceholder("mobile")
      }), this.state.loggedin ? this.isFieldHidden("password") : !this.isFieldHidden("password") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "password",
        id: "customer.password",
        autoComplete: "new-password",
        component: _inputField["default"],
        type: "password",
        onBlur: this.passwordTemp,
        label: !this.state.loggedin ? this.getFieldLabel("password") : "",
        validate: this.getFieldValidators("password"),
        placeholder: this.getFieldPlaceholder("password")
      }), this.state.loggedin ? this.isFieldHidden("password") : !this.isFieldHidden("password") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "password_verify",
        id: "customer.password_verify",
        autoComplete: "new-password",
        component: _inputField["default"],
        type: "password",
        label: !this.state.loggedin ? this.getFieldLabel("password_verify") : "",
        validate: this.getFieldValidators("password_verify"),
        placeholder: this.getFieldPlaceholder("password_verify")
      }), !this.isFieldHidden("address1") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "shipping_address.address1",
        id: "shipping_address.address1",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("address1"),
        validate: this.getFieldValidators("address1"),
        placeholder: this.getFieldPlaceholder("address1"),
        onBlur: function onBlur(event, value) {
          return setTimeout(function () {
            return saveShippingLocation({
              address1: value
            });
          });
        }
      }), !this.isFieldHidden("address2") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "shipping_address.address2",
        id: "shipping_address.address2",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("address2"),
        placeholder: this.getFieldPlaceholder("address2"),
        onBlur: function onBlur(event, value) {
          return setTimeout(function () {
            return saveShippingLocation({
              address2: value
            });
          });
        }
      }), !this.isFieldHidden("country") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "shipping_address.country",
        id: "shipping_address.country",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("country"),
        validate: this.getFieldValidators("country"),
        placeholder: this.getFieldPlaceholder("country"),
        onBlur: function onBlur(event, value) {
          return setTimeout(function () {
            return saveShippingLocation({
              country: value
            });
          });
        }
      }), !this.isFieldHidden("state") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "shipping_address.state",
        id: "shipping_address.state",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("state"),
        validate: this.getFieldValidators("state"),
        placeholder: this.getFieldPlaceholder("state"),
        onBlur: function onBlur(event, value) {
          return setTimeout(function () {
            return saveShippingLocation({
              state: value
            });
          });
        }
      }), !this.isFieldHidden("postal_code") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "shipping_address.postal_code",
        id: "shipping_address.postal_code",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("postal_code"),
        validate: this.getFieldValidators("postal_code"),
        placeholder: this.getFieldPlaceholder("postal_code"),
        onBlur: function onBlur(event, value) {
          return setTimeout(function () {
            return saveShippingLocation({
              postal_code: value
            });
          });
        }
      }), !this.isFieldHidden("city") && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "shipping_address.city",
        id: "shipping_address.city",
        component: _inputField["default"],
        type: "text",
        label: this.getFieldLabel("city"),
        validate: this.getFieldValidators("city"),
        placeholder: this.getFieldPlaceholder("city"),
        onBlur: function onBlur(event, value) {
          return setTimeout(function () {
            return saveShippingLocation({
              city: value
            });
          });
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "checkout-button-wrap"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        disabled: invalid,
        className: buttonClassName
      }, _settings.text.next))));
    }
  }]);

  return CheckoutStepContacts;
}(_react["default"].Component);

var _default = (0, _reduxForm.reduxForm)({
  form: "CheckoutStepContacts",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(CheckoutStepContacts);

exports["default"] = _default;