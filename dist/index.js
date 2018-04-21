'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _portalCollector = require('./portal-collector');

Object.defineProperty(exports, 'PortalCollector', {
  enumerable: true,
  get: function get() {
    return _portalCollector.PortalCollector;
  }
});

var _portalContext = require('./portal-context');

Object.defineProperty(exports, 'PortalCollectorProvider', {
  enumerable: true,
  get: function get() {
    return _portalContext.PortalCollectorProvider;
  }
});

var _createPortal = require('./create-portal');

Object.defineProperty(exports, 'createPortal', {
  enumerable: true,
  get: function get() {
    return _createPortal.createPortal;
  }
});
exports.removePortals = removePortals;


/**
 * Export `removePortals`.
 */

function removePortals(elementIds) {
  elementIds.forEach(function (elementId) {
    var container = document.getElementById(elementId);

    if (container) {
      // $FlowFixMe
      container.childNodes.forEach(function (node) {
        return node.remove();
      });
    }
  });
}