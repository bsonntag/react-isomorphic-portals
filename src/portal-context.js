// @flow

/**
 * Module dependencies.
 */

import { PortalCollector } from './portal-collector';
import { createContext } from 'react';

/**
 * Create portal collector context.
 */

const { Consumer, Provider } = createContext(new PortalCollector());

/**
 * Export `PortalCollectorConsumer` component.
 */

export const PortalCollectorConsumer = Consumer;

/**
 * Export `PortalCollectorProvider` component.
 */

export const PortalCollectorProvider = Provider;
