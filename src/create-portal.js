// @flow

/**
 * Module dependencies.
 */

import { PortalCollectorConsumer } from './portal-context';
import { canUseDOM } from './utils/dom';
import { createPortal as createReactPortal } from 'react-dom';
import React, { type Node } from 'react';

/**
 * Export `createPortal`.
 */

export function createPortal(children: Node, elementId: string) {
  if (canUseDOM()) {
    return createReactPortal(
      children,
      // $FlowFixMe
      document.getElementById(elementId)
    );
  }

  return (
    <PortalCollectorConsumer>
      {collector => collector.collect(children, elementId)}
    </PortalCollectorConsumer>
  );
}
