"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeUserPassword = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import serverConfigs from "../../../../config/server"
// key to sign tokens
var jwtSecretKey = "-";
var cert = jwtSecretKey; // const cert = serverConfigs.jwtSecretKey

var encodeUserPassword = function encodeUserPassword(token) {
  return _jsonwebtoken["default"].sign({
    password: token
  }, cert);
};

exports.encodeUserPassword = encodeUserPassword;