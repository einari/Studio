// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ContainerRuntimeFactoryWithDefaultDataStore } from '@fluidframework/aqueduct';
import { StarTrackerInstantiationFactory } from './dataObject';

/**
 * The DiceRollerContainerRuntimeFactory is the container code for our scenario.
 *
 * Since we only need to instantiate and retrieve a single dice roller for our scenario, we can use a
 * ContainerRuntimeFactoryWithDefaultDataStore. We provide it with the type of the data object we want to create
 * and retrieve by default, and the registry entry mapping the type to the factory.
 *
 * This container code will create the single default data object on our behalf and make it available on the
 * Container with a URL of "/", so it can be retrieved via container.request("/").
 */
export const StarTrackerContainerRuntimeFactory = new ContainerRuntimeFactoryWithDefaultDataStore(
    StarTrackerInstantiationFactory.type,
    new Map([
        StarTrackerInstantiationFactory.registryEntry,
    ]),
);
