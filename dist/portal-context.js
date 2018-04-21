'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortalCollectorProvider = exports.PortalCollectorConsumer = undefined;

var _portalCollector = require('./portal-collector');

var _react = require('react');

/**
 * Create portal collector context.
 */

/**
 * Module dependencies.
 */

var _createContext = (0, _react.createContext)(new _portalCollector.PortalCollector()),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

/**
 * Export `PortalCollectorConsumer` component.
 */

var PortalCollectorConsumer = exports.PortalCollectorConsumer = Consumer;

/**
 * Export `PortalCollectorProvider` component.
 */

var PortalCollectorProvider = exports.PortalCollectorProvider = Provider;