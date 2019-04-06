"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortalCollectorProvider = exports.PortalCollectorConsumer = void 0;

var _portalCollector = require("./portal-collector");

var _react = require("react");

/**
 * Module dependencies.
 */

/**
 * Create portal collector context.
 */
var _createContext = (0, _react.createContext)(new _portalCollector.PortalCollector()),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;
/**
 * Export `PortalCollectorConsumer` component.
 */


var PortalCollectorConsumer = Consumer;
/**
 * Export `PortalCollectorProvider` component.
 */

exports.PortalCollectorConsumer = PortalCollectorConsumer;
var PortalCollectorProvider = Provider;
exports.PortalCollectorProvider = PortalCollectorProvider;