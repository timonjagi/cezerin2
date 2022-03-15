"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeSettings = exports.text = exports.language = exports.initOnServer = exports.initOnClient = exports.api = void 0;
var themeSettings = null;
exports.themeSettings = themeSettings;
var text = null;
exports.text = text;
var language = null;
exports.language = language;
var api = null;
exports.api = api;

var setVariables = function setVariables(options) {
  if (options.themeSettings) {
    ;
    exports.themeSettings = themeSettings = options.themeSettings;
  }

  if (options.text) {
    ;
    exports.text = text = options.text;
  }

  if (options.language) {
    ;
    exports.language = language = options.language;
  }

  if (options.api) {
    ;
    exports.api = api = options.api;
  }
};

var initOnClient = function initOnClient(options) {
  setVariables(options);
};

exports.initOnClient = initOnClient;

var initOnServer = function initOnServer(options) {
  setVariables(options);
};

exports.initOnServer = initOnServer;