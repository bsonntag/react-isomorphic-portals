'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortalCollector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = require('react-dom/server');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Export `PortalCollector`.
 */

/**
 * Module dependencies.
 */

var PortalCollector = exports.PortalCollector = function () {
  function PortalCollector() {
    _classCallCheck(this, PortalCollector);

    this.portals = {};
  }

  /**
   * Portals.
   */

  _createClass(PortalCollector, [{
    key: 'collect',


    /**
     * Collect.
     */

    value: function collect(element, elementId) {
      this.portals[elementId] = this.portals[elementId] || [];
      this.portals[elementId].push(element);
    }

    /**
     * Render portals to static markup.
     */

  }, {
    key: 'renderPortalsToStaticMarkup',
    value: function renderPortalsToStaticMarkup() {
      var _this = this;

      return Object.keys(this.portals).reduce(function (result, elementId) {
        return _extends({}, result, _defineProperty({}, elementId, _this.portals[elementId].map(_server.renderToStaticMarkup).join('')));
      }, {});
    }
  }]);

  return PortalCollector;
}();