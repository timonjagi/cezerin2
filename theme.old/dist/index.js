"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AccountContainer", {
  enumerable: true,
  get: function get() {
    return _account["default"];
  }
});
Object.defineProperty(exports, "CategoryContainer", {
  enumerable: true,
  get: function get() {
    return _category["default"];
  }
});
Object.defineProperty(exports, "CheckoutContainer", {
  enumerable: true,
  get: function get() {
    return _checkout["default"];
  }
});
Object.defineProperty(exports, "CheckoutSuccessContainer", {
  enumerable: true,
  get: function get() {
    return _checkoutSuccess["default"];
  }
});
Object.defineProperty(exports, "ForgotPasswordContainer", {
  enumerable: true,
  get: function get() {
    return _forgotPassword["default"];
  }
});
Object.defineProperty(exports, "IndexContainer", {
  enumerable: true,
  get: function get() {
    return _index["default"];
  }
});
Object.defineProperty(exports, "LoginContainer", {
  enumerable: true,
  get: function get() {
    return _login["default"];
  }
});
Object.defineProperty(exports, "NotFoundContainer", {
  enumerable: true,
  get: function get() {
    return _notfound["default"];
  }
});
Object.defineProperty(exports, "PageContainer", {
  enumerable: true,
  get: function get() {
    return _page["default"];
  }
});
Object.defineProperty(exports, "ProductContainer", {
  enumerable: true,
  get: function get() {
    return _product["default"];
  }
});
Object.defineProperty(exports, "RegisterContainer", {
  enumerable: true,
  get: function get() {
    return _register["default"];
  }
});
Object.defineProperty(exports, "ResetPasswordContainer", {
  enumerable: true,
  get: function get() {
    return _resetPassword["default"];
  }
});
Object.defineProperty(exports, "SearchContainer", {
  enumerable: true,
  get: function get() {
    return _search["default"];
  }
});
Object.defineProperty(exports, "SharedContainer", {
  enumerable: true,
  get: function get() {
    return _shared["default"];
  }
});
Object.defineProperty(exports, "initOnClient", {
  enumerable: true,
  get: function get() {
    return _settings.initOnClient;
  }
});
Object.defineProperty(exports, "initOnServer", {
  enumerable: true,
  get: function get() {
    return _settings.initOnServer;
  }
});

require("core-js/stable");

require("regenerator-runtime/runtime");

var _account = _interopRequireDefault(require("./containers/account"));

var _category = _interopRequireDefault(require("./containers/category"));

var _checkout = _interopRequireDefault(require("./containers/checkout"));

var _checkoutSuccess = _interopRequireDefault(require("./containers/checkoutSuccess"));

var _forgotPassword = _interopRequireDefault(require("./containers/forgotPassword"));

var _index = _interopRequireDefault(require("./containers/index"));

var _login = _interopRequireDefault(require("./containers/login"));

var _notfound = _interopRequireDefault(require("./containers/notfound"));

var _page = _interopRequireDefault(require("./containers/page"));

var _product = _interopRequireDefault(require("./containers/product"));

var _register = _interopRequireDefault(require("./containers/register"));

var _resetPassword = _interopRequireDefault(require("./containers/resetPassword"));

var _search = _interopRequireDefault(require("./containers/search"));

var _shared = _interopRequireDefault(require("./containers/shared"));

var _settings = require("./lib/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// combine all css files into one with webpack. Hack to deal with server side rendering.
if (typeof window !== "undefined") {
  require("../assets/scss/theme.scss");
}