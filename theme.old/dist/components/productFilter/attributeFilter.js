"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var AttributeValue = /*#__PURE__*/function (_React$Component) {
  _inherits(AttributeValue, _React$Component);

  var _super = _createSuper(AttributeValue);

  function AttributeValue(props) {
    var _this;

    _classCallCheck(this, AttributeValue);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _this$props = _this.props,
          attributeName = _this$props.attributeName,
          valueName = _this$props.valueName,
          setFilterAttribute = _this$props.setFilterAttribute,
          unsetFilterAttribute = _this$props.unsetFilterAttribute;
      var checked = event.target.checked;

      _this.setState({
        checked: checked
      });

      if (checked) {
        setFilterAttribute(attributeName, valueName);
      } else {
        unsetFilterAttribute(attributeName, valueName);
      }
    });

    _this.state = {
      checked: props.checked
    };
    return _this;
  }

  _createClass(AttributeValue, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== this.props.checked) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          valueName = _this$props2.valueName,
          count = _this$props2.count;
      var isDisabled = count === 0;
      var classChecked = this.state.checked ? "attribute-checked" : "";
      var classDisabled = isDisabled ? "attribute-disabled" : "";
      return /*#__PURE__*/_react["default"].createElement("label", {
        className: classChecked + " " + classDisabled
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        disabled: isDisabled,
        onChange: this.onChange,
        checked: this.state.checked
      }), valueName);
    }
  }]);

  return AttributeValue;
}(_react["default"].Component);

var AttributeSet = function AttributeSet(_ref) {
  var attribute = _ref.attribute,
      setFilterAttribute = _ref.setFilterAttribute,
      unsetFilterAttribute = _ref.unsetFilterAttribute;
  var values = attribute.values.map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(AttributeValue, {
      key: index,
      attributeName: attribute.name,
      valueName: value.name,
      checked: value.checked,
      count: value.count,
      setFilterAttribute: setFilterAttribute,
      unsetFilterAttribute: unsetFilterAttribute
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "attribute"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "attribute-title"
  }, attribute.name), values);
};

var AttributeFilter = function AttributeFilter(_ref2) {
  var attributes = _ref2.attributes,
      setFilterAttribute = _ref2.setFilterAttribute,
      unsetFilterAttribute = _ref2.unsetFilterAttribute;
  var attributeSets = attributes.map(function (attribute, index) {
    return /*#__PURE__*/_react["default"].createElement(AttributeSet, {
      key: index,
      attribute: attribute,
      setFilterAttribute: setFilterAttribute,
      unsetFilterAttribute: unsetFilterAttribute
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "attribute-filter"
  }, attributeSets);
};

var _default = AttributeFilter;
exports["default"] = _default;