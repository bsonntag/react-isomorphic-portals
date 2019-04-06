"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPortal = createPortal;

var _portalContext = require("./portal-context");

var _dom = require("./utils/dom");

var _reactDom = require("react-dom");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `createPortal`.
 */
function createPortal(children, elementId) {
  if ((0, _dom.canUseDOM)()) {
    return (0, _reactDom.createPortal)(children, // $FlowFixMe
    document.getElementById(elementId));
  }

  return _react["default"].createElement(_portalContext.PortalCollectorConsumer, null, function (collector) {
    return collector.collect(children, elementId);
  });
}