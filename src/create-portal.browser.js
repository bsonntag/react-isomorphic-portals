// @flow

/**
 * Module dependencies.
 */

import type { Node } from 'react';
import { createPortal as createReactPortal } from 'react-dom';

/**
 * Export `createPortal`.
 */

export function createPortal(children: Node, elementId: string) {
  return createReactPortal(
    children,
    // $FlowFixMe
    document.getElementById(elementId)
  );
}
