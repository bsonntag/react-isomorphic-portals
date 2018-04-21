'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPortal = createPortal;

var _portalContext = require('./portal-context');

var _dom = require('./utils/dom');

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export `createPortal`.
 */

function createPortal(children, elementId) {
  if ((0, _dom.canUseDOM)()) {
    return (0, _reactDom.createPortal)(children,
    // $FlowFixMe
    document.getElementById(elementId));
  }

  return _react2.default.createElement(
    _portalContext.PortalCollectorConsumer,
    null,
    function (collector) {
      return collector.collect(children, elementId);
    }
  );
}

/**
 * Module dependencies.
 */