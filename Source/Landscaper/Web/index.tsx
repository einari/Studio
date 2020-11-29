// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Bindings as MVVMBindings } from '@shared/mvvm';
import { Bindings as PortalBindings } from '@shared/portal';
import { Bindings as PlatformBindings } from '@shared/platform';
import { Stage, Layer, Star, Text } from 'react-konva';

import { getDefaultObjectFromContainer, getObjectWithIdFromContainer } from '@fluidframework/aqueduct';
import { getTinyliciousContainer } from './FluidContainer';

import { StarTrackerContainerRuntimeFactory } from './containerCode';
import { IStarTracker } from './dataObject';

import '@shared/styles/theme';
import './index.scss';

function generateShapes() {
    return [...Array(1)].map((_, i) => ({
        id: i.toString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
    }));
}

const INITIAL_STATE = generateShapes();

let starTracker: IStarTracker;
let movedCallback: Function;

const documentId = '681cf9ac-7dce-4544-adc8-3e19d121de07';

(async () => {
    const container = await getTinyliciousContainer(documentId, StarTrackerContainerRuntimeFactory, false);

    starTracker = await getDefaultObjectFromContainer<IStarTracker>(container);
    starTracker.on('starMoved', () => {
        if (movedCallback) movedCallback();
    });

})();

export default function App() {
    MVVMBindings.initialize();
    PortalBindings.initialize();
    PlatformBindings.initialize();

    const [stars, setStars] = React.useState(INITIAL_STATE);
    movedCallback = () => {
        stars[0].x = starTracker.x;
        stars[0].y = starTracker.y;
        setStars(
            stars.map((star) => {

                return {
                    ...star,
                    isDragging: false,
                };
            })
        );
    };

    const handleDragStart = (e) => {
        const id = e.target.id();
        setStars(
            stars.map((star) => {
                //console.log(star.x);
                return {
                    ...star,
                    isDragging: star.id === id,
                };
            })
        );
    };

    const handleDragEnd = (e) => {
        //console.log(`${e.target.x()} - ${e.target.y()}`);
        starTracker.moved(e.target.x(), e.target.y());
        setStars(
            stars.map((star) => {

                return {
                    ...star,
                    isDragging: false,
                };
            })
        );
    };

    const handleDragMove = (e) => {
        starTracker.moved(e.target.x(), e.target.y());
        //console.log(`${e.target.x()} - ${e.target.y()}`);
    };

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {stars.map((star) => (
                        <Star
                            key={star.id}
                            id={star.id}
                            x={star.x}
                            y={star.y}
                            numPoints={5}
                            innerRadius={20}
                            outerRadius={40}
                            fill="#89b717"
                            opacity={0.8}
                            draggable
                            rotation={star.rotation}
                            shadowColor="black"
                            shadowBlur={10}
                            shadowOpacity={0.6}
                            shadowOffsetX={star.isDragging ? 10 : 5}
                            shadowOffsetY={star.isDragging ? 10 : 5}
                            scaleX={star.isDragging ? 1.2 : 1}
                            scaleY={star.isDragging ? 1.2 : 1}
                            onDragMove={handleDragMove}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                        />
                    ))}
                </Layer>
            </Stage>
        </>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

