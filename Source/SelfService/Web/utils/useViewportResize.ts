// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useEffect } from 'react';

/**
 * Adds a listener to the `window.visualViewport:resize` event, that re-dispatches a `window:resize`.
 * Some components that we use (e.g. Vega graphs) use the `window:resize` event to update their own size.
 * The `window:resize` event is not triggered when a scrollbar is shown or hidden, causing their size to be wrong
 * when DOM elements are added later making a scrollbar appear. This re-dispatching fixes that issue.
 */
export const useViewportResize = (): void => {
    useEffect(() => {
        if (window.visualViewport === null) return;

        const listener = (_: Event) => {
            const event = new Event(
                'resize',
                {
                    bubbles: false,
                    cancelable: false,
                    composed: false,
                });

            window.dispatchEvent(event);
        };

        window.visualViewport.addEventListener('resize', listener);
        return () => window.visualViewport?.removeEventListener('resize', listener);
    }, [window.visualViewport]);
};
