// @flow

/**
 * Module dependencies.
 */

import type { Node } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Export `PortalCollector`.
 */

export class PortalCollector {

  /**
   * Portals.
   */

  portals = {};

  /**
   * Collect.
   */

  collect(element: Node, elementId: string) {
    this.portals[elementId] = this.portals[elementId] || [];
    this.portals[elementId].push(element);
  }

  /**
   * Render portals to static markup.
   */

  renderPortalsToStaticMarkup() {
    return Object
      .keys(this.portals)
      .reduce((result, elementId) => ({
        ...result,
        [elementId]: this.portals[elementId].map(renderToStaticMarkup).join(''),
      }), {});
  }

}
