"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reduxForm = require("redux-form");

var _settings = require("../../lib/settings");

var _inputField = _interopRequireDefault(require("./inputField"));

var _textareaField = _interopRequireDefault(require("./textareaField"));

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

var getFieldLabelByKey = function getFieldLabelByKey(key) {
  switch (key) {
    case "full_name":
      if (typeof _settings.text.fullName !== "undefined" && _settings.text.fullName != null) return _settings.text.fullName;
      return "";

    case "address1":
      if (typeof _settings.text.address1 !== "undefined" && _settings.text.address1 != null) return _settings.text.address1;
      return "";

    case "address2":
      if (typeof _settings.text.address2 !== "undefined" && _settings.text.address2 != null) return _settings.text.address2;
      return "";

    case "postal_code":
      if (typeof _settings.text.postal_code !== "undefined" && _settings.text.postal_code != null) return _settings.text.postal_code;
      return "";

    case "phone":
      if (typeof _settings.text.phone !== "undefined" && _settings.text.phone != null) return _settings.text.phone;
      return "";

    case "mobile":
      if (typeof _settings.text.mobile !== "undefined" && _settings.text.mobile != null) return _settings.text.mobile;
      return "";

    case "company":
      if (typeof _settings.text.company !== "undefined" && _settings.text.company != null) return _settings.text.company;
      return "";

    default:
      return "";
  }
};

var getFieldLabel = function getFieldLabel(field) {
  var label = field.label && field.label.length > 0 ? field.label : getFieldLabelByKey(field.key);
  return field.required === true ? label : "".concat(label, " (").concat(_settings.text.optional, ")");
};

var CheckoutStepShipping = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckoutStepShipping, _React$Component);

  var _super = _createSuper(CheckoutStepShipping);

  function CheckoutStepShipping(props) {
    var _this;

    _classCallCheck(this, CheckoutStepShipping);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeBillingAsShipping", function (event) {
      _this.setState({
        billingAsShipping: event.target.checked
      });
    });

    _this.state = {
      billingAsShipping: true
    };
    return _this;
  }

  _createClass(CheckoutStepShipping, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleSubmit = _this$props.handleSubmit,
          pristine = _this$props.pristine,
          invalid = _this$props.invalid,
          valid = _this$props.valid,
          reset = _this$props.reset,
          submitting = _this$props.submitting,
          processingCheckout = _this$props.processingCheckout,
          initialValues = _this$props.initialValues,
          shippingMethod = _this$props.shippingMethod,
          checkoutFields = _this$props.checkoutFields,
          settings = _this$props.settings,
          inputClassName = _this$props.inputClassName,
          buttonClassName = _this$props.buttonClassName,
          editButtonClassName = _this$props.editButtonClassName,
          title = _this$props.title,
          show = _this$props.show,
          isReadOnly = _this$props.isReadOnly,
          showPaymentForm = _this$props.showPaymentForm,
          onEdit = _this$props.onEdit;
      var hideBillingAddress = settings.hide_billing_address === true;
      var commentsField = checkoutFields.find(function (f) {
        return f.name === "comments";
      });
      var commentsFieldPlaceholder = commentsField && commentsField.placeholder && commentsField.placeholder.length > 0 ? commentsField.placeholder : "";
      var commentsFieldLabel = commentsField && commentsField.label && commentsField.label.length > 0 ? commentsField.label : _settings.text.comments;
      var commentsFieldStatus = commentsField && commentsField.status.length > 0 ? commentsField.status : null;
      var commentsValidate = commentsFieldStatus === "required" ? validateRequired : null;
      var hideCommentsField = commentsFieldStatus === "hidden";

      if (!show) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-step"
        }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "2"), title));
      }

      if (isReadOnly) {
        var _shippingFields = null;

        if (shippingMethod && shippingMethod.fields && shippingMethod.fields.length > 0) {
          _shippingFields = shippingMethod.fields.map(function (field, index) {
            var fieldLabel = getFieldLabel(field);
            var fieldValue = initialValues.shipping_address[field.key];
            return /*#__PURE__*/_react["default"].createElement("div", {
              key: index,
              className: "checkout-field-preview"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "name"
            }, fieldLabel), /*#__PURE__*/_react["default"].createElement("div", {
              className: "value"
            }, fieldValue));
          });
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-step"
        }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "2"), title), _shippingFields, !hideCommentsField && initialValues.comments !== "" && /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-field-preview"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "name"
        }, commentsFieldLabel), /*#__PURE__*/_react["default"].createElement("div", {
          className: "value"
        }, initialValues.comments)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "checkout-button-wrap"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          onClick: onEdit,
          className: editButtonClassName
        }, _settings.text.edit)));
      }

      var shippingFields = null;

      if (shippingMethod && shippingMethod.fields && shippingMethod.fields.length > 0) {
        shippingFields = shippingMethod.fields.map(function (field, index) {
          var fieldLabel = getFieldLabel(field);
          var fieldId = "shipping_address.".concat(field.key);
          var fieldClassName = "".concat(inputClassName, " shipping-").concat(field.key);
          var validate = field.required === true ? validateRequired : null;
          return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
            key: index,
            className: fieldClassName,
            name: fieldId,
            id: fieldId,
            component: _inputField["default"],
            type: "text",
            label: fieldLabel,
            validate: validate
          });
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "checkout-step"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, /*#__PURE__*/_react["default"].createElement("span", null, "2"), title), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: handleSubmit
      }, shippingFields, !hideCommentsField && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " shipping-comments"),
        name: "comments",
        id: "customer.comments",
        component: _textareaField["default"],
        type: "text",
        label: commentsFieldLabel,
        placeholder: commentsFieldPlaceholder,
        validate: commentsValidate,
        rows: "3"
      }), !hideBillingAddress && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, _settings.text.billingAddress), /*#__PURE__*/_react["default"].createElement("div", {
        className: "billing-as-shipping"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "billingAsShipping",
        type: "checkbox",
        onChange: this.onChangeBillingAsShipping,
        checked: this.state.billingAsShipping
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "billingAsShipping"
      }, _settings.text.sameAsShipping)), !this.state.billingAsShipping && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " billing-fullname"),
        name: "billing_address.full_name",
        id: "billing_address.full_name",
        component: _inputField["default"],
        type: "text",
        label: _settings.text.fullName,
        validate: [validateRequired]
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " billing-address1"),
        name: "billing_address.address1",
        id: "billing_address.address1",
        component: _inputField["default"],
        type: "text",
        label: _settings.text.address1,
        validate: [validateRequired]
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " billing-address2"),
        name: "billing_address.address2",
        id: "billing_address.address2",
        component: _inputField["default"],
        type: "text",
        label: "".concat(_settings.text.address2, " (").concat(_settings.text.optional, ")")
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " billing-postalcode"),
        name: "billing_address.postal_code",
        id: "billing_address.postal_code",
        component: _inputField["default"],
        type: "text",
        label: "".concat(_settings.text.postal_code, " (").concat(_settings.text.optional, ")")
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " billing-phone"),
        name: "billing_address.phone",
        id: "billing_address.phone",
        component: _inputField["default"],
        type: "text",
        label: "".concat(_settings.text.phone, " (").concat(_settings.text.optional, ")")
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        className: "".concat(inputClassName, " billing-company"),
        name: "billing_address.company",
        id: "billing_address.company",
        component: _inputField["default"],
        type: "text",
        label: "".concat(_settings.text.company, " (").concat(_settings.text.optional, ")")
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "checkout-button-wrap"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        disabled: submitting || processingCheckout || invalid || initialValues.shipping_method_id === null || initialValues.payment_method_id === null,
        className: "".concat(buttonClassName).concat(processingCheckout ? " is-loading" : "")
      }, showPaymentForm ? _settings.text.next : _settings.text.orderSubmit))));
    }
  }]);

  return CheckoutStepShipping;
}(_react["default"].Component);

var _default = (0, _reduxForm.reduxForm)({
  form: "CheckoutStepShipping",
  enableReinitialize: true,
  keepDirtyOnReinitialize: false
})(CheckoutStepShipping);

exports["default"] = _default;