// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { EventEmitter } from 'events';
import { DataObject, DataObjectFactory } from '@fluidframework/aqueduct';
import { IValueChanged } from '@fluidframework/map';

export interface IStarTracker extends EventEmitter {
    readonly x: number;
    readonly y: number;

    moved: (x: number, y: number) => void;

    on(event: 'starMoved', listener: () => void): this;
}

const starXValue = 'starXValue';
const starYValue = 'starYValue';

export class StarTracker extends DataObject implements IStarTracker {
    protected async initializingFirstTime() {
        this.root.set(starXValue, 0);
        this.root.set(starYValue, 0);
    }

    protected async hasInitialized() {
        this.root.on('valueChanged', (changed: IValueChanged) => {
            if (changed.key === starXValue || changed.key === starYValue) {
                this.emit('starMoved');
            }
        });
    }

    public get x() {
        return this.root.get(starXValue);
    }

    public get y() {
        return this.root.get(starYValue);
    }

    public readonly moved = (x: number, y: number) => {
        this.root.set(starXValue, x);
        this.root.set(starYValue, y);
    };
}

export const StarTrackerInstantiationFactory = new DataObjectFactory(
    'star-tracker',
    StarTracker,
    [],
    {},
);
