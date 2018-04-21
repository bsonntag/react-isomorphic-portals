'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPortal = createPortal;

var _reactDom = require('react-dom');

/**
 * Export `createPortal`.
 */

/**
 * Module dependencies.
 */

function createPortal(children, elementId) {
  return (0, _reactDom.createPortal)(children,
  // $FlowFixMe
  document.getElementById(elementId));
}