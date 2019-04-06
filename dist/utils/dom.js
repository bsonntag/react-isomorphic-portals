"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = canUseDOM;

/**
 * Export `canUseDOM`.
 */
function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}