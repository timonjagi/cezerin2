"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    disabled: field.disabled,
    className: field.meta.touched && field.meta.error ? "invalid" : ""
  })));
};

var initialData = {
  status: false,
  isRightToken: null,
  isCustomerSaved: null
};

var Register = /*#__PURE__*/function (_React$Component) {
  _inherits(Register, _React$Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

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
      } else {
        switch (fieldName) {
          case "first_name":
            return _settings.text.first_name;
            break;

          case "last_name":
            return _settings.text.last_name;
            break;

          case "email":
            return _settings.text.email;
            break;

          case "password":
            return _settings.text.password;
            break;

          case "password_verify":
            return _settings.text.password_verify;
            break;

          default:
            return "Unnamed field";
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldLabel", function (fieldName) {
      var labelText = _this.getFieldLabelText(fieldName);

      return _this.isFieldOptional(fieldName) ? "".concat(labelText, " (").concat(_settings.text.optional, ")") : labelText;
    });

    _this.state = {
      comparePassword: ""
    };
    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          registerProperties = _this$props.registerProperties;
      registerProperties = registerProperties === undefined ? initialData : registerProperties;
      var registerButtonClassName = "account-button button";
      var inputClassName = "login-input-field";
      var titleClassName = "login-title";
      var successAlertText = "success-alert-text";
      var errorAlertText = "error-alert-text";
      var loginButtonClass = "account-button button";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "login-container"
      }, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: handleSubmit,
        className: "login-form"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "register-section"
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: titleClassName
      }, _settings.text.register_title), !registerProperties.status && !registerProperties.isCustomerSaved && registerProperties.isCustomerSaved !== null && registerProperties.isRightToken ? /*#__PURE__*/_react["default"].createElement("p", {
        className: errorAlertText
      }, _settings.text.registry_failed) : "", registerProperties.status ? /*#__PURE__*/_react["default"].createElement("p", {
        className: successAlertText
      }, _settings.text.registry_doi_success) : "", registerProperties.isCustomerSaved ? /*#__PURE__*/_react["default"].createElement("p", {
        className: successAlertText
      }, _settings.text.registry_completed) : "", !registerProperties.isRightToken && registerProperties.isRightToken !== null ? /*#__PURE__*/_react["default"].createElement("p", {
        className: errorAlertText
      }, _settings.text.registry_wrong_token) : "", !registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "first_name",
        id: "customer.first_name",
        component: InputField,
        type: "text",
        props: registerProperties !== undefined && registerProperties.status ? {
          disabled: true
        } : this.value,
        label: this.getFieldLabel("first_name"),
        validate: this.getFieldValidators("first_name"),
        placeholder: this.getFieldPlaceholder("first_name")
      }), !registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "last_name",
        id: "customer.last_name",
        component: InputField,
        type: "text",
        props: registerProperties !== undefined && registerProperties.status ? {
          disabled: true
        } : this.value,
        label: this.getFieldLabel("last_name"),
        validate: this.getFieldValidators("last_name"),
        placeholder: this.getFieldPlaceholder("last_name")
      }), !registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "email",
        id: "customer.reg_email",
        component: InputField,
        type: "email",
        props: registerProperties !== undefined && registerProperties.status ? {
          disabled: true
        } : this.value,
        label: this.getFieldLabel("email"),
        validate: this.getFieldValidators("email"),
        placeholder: this.getFieldPlaceholder("email")
      }), !registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "password",
        id: "customer.reg_password",
        component: InputField,
        type: "password",
        props: registerProperties !== undefined && registerProperties.status ? {
          disabled: true
        } : this.value,
        label: this.getFieldLabel("password"),
        onBlur: this.passwordTemp,
        validate: this.getFieldValidators("password"),
        placeholder: this.getFieldPlaceholder("password")
      }), !registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: inputClassName,
        name: "password_verify",
        id: "customer.reg_password_verify",
        component: InputField,
        type: "password",
        props: registerProperties !== undefined && registerProperties.status ? {
          disabled: true
        } : this.value,
        label: this.getFieldLabel("password_verify"),
        validate: this.getFieldValidators("password_verify"),
        placeholder: this.getFieldPlaceholder("password_verify")
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "login-button-wrap"
      }, !registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        className: registerButtonClassName,
        disabled: registerProperties !== undefined && registerProperties.status
      }, _settings.text.register), registerProperties.isCustomerSaved && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/login",
        style: {
          textDecoration: "none"
        },
        key: "back-to-login",
        className: loginButtonClass
      }, _settings.text.back_to_login)))));
    }
  }]);

  return Register;
}(_react["default"].Component);

var _default = (0, _reduxForm.reduxForm)({
  form: "Register"
})(Register);

exports["default"] = _default;