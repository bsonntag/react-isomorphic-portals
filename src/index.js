// @flow

/**
 * Export `react-isomorphic-portals`.
 */

export { PortalCollector } from './portal-collector';
export { PortalCollectorProvider } from './portal-context';
export { createPortal } from './create-portal';

/**
 * Export `removePortals`.
 */

export function removePortals(elementIds: Array<string>) {
  elementIds.forEach(elementId => {
    const container = document.getElementById(elementId);

    if (container) {
      // $FlowFixMe
      container.childNodes.forEach(node => node.remove());
    }
  });
}
