"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortalCollector = void 0;

var _server = require("react-dom/server");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Export `PortalCollector`.
 */
var PortalCollector =
/*#__PURE__*/
function () {
  function PortalCollector() {
    _classCallCheck(this, PortalCollector);

    _defineProperty(this, "portals", {});
  }

  _createClass(PortalCollector, [{
    key: "collect",

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
    key: "renderPortalsToStaticMarkup",
    value: function renderPortalsToStaticMarkup() {
      var _this = this;

      return Object.keys(this.portals).reduce(function (result, elementId) {
        return _objectSpread({}, result, _defineProperty({}, elementId, _this.portals[elementId].map(_server.renderToStaticMarkup).join('')));
      }, {});
    }
  }]);

  return PortalCollector;
}();

exports.PortalCollector = PortalCollector;