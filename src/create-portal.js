// @flow

/**
 * Module dependencies.
 */

import type { Node } from 'react';
import { PortalCollectorConsumer } from './portal-context';
import { canUseDOM } from './utils/dom';
import { createPortal as createReactPortal } from 'react-dom';
import React from 'react';

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
