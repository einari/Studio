// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState } from 'react';
import { Circle, Line } from 'react-konva';
import { Spring, SpringConfig, animated } from 'react-spring/renderprops-konva';


export type CreateMenuProps = {
    x: number,
    y: number
};

const radius = 25;
const symbolSize = 30;
const offset = 30;

export const CreateMenu = (props: CreateMenuProps) => {
    const horizontalLineX = props.x - symbolSize / 2;
    const horizontalLiney = props.y;
    const verticalLineX = props.x;
    const verticalLiney = props.y - symbolSize / 2;

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(true);
    };

    const springConfig: SpringConfig = { mass: 3, tension: 750, friction: 40 };


    return (
        <>
            <Spring
                config={springConfig}
                native
                from={{ scaleX: 1, scaleY: 1, shadowBlur: 5 }}
                to={{
                    scaleX: expanded ? 3 : 1, scaleY: expanded ? 3 : 1,
                    shadowBlur: expanded ? 25 : 5
                }}

            >

                {springProps => (
                    <>
                        <animated.Circle {...springProps}
                            x={props.x}
                            y={props.y}
                            radius={radius}
                            fill="transparent"
                            stroke="white"
                            onClick={handleClick}
                            onMouseLeave={() => setExpanded(false)}
                        />
                    </>
                )}
            </Spring>

            <Spring
                config={springConfig}
                native
                from={{ x: props.x, y: props.y, scaleX: 0, scaleY: 0, shadowBlur: 5 }}
                to={{
                    x: expanded ? props.x + offset : props.x,
                    y: expanded ? props.y - offset : props.y,
                    scaleX: expanded ? 1 : 0, scaleY: expanded ? 1 : 0,
                    shadowBlur: expanded ? 25 : 5
                }}

            >

                {springProps => (
                    <>
                        <animated.Circle {...springProps} radius={radius} fill="transparent" stroke="white" onClick={handleClick} />
                    </>
                )}
            </Spring>

            <Spring
                config={springConfig}
                native
                from={{ x: props.x, y: props.y, scaleX: 0, scaleY: 0, shadowBlur: 5 }}
                to={{
                    x: expanded ? props.x - offset : props.x,
                    y: expanded ? props.y - offset : props.y,
                    scaleX: expanded ? 1 : 0, scaleY: expanded ? 1 : 0,
                    shadowBlur: expanded ? 25 : 5
                }}
            >

                {springProps => (
                    <>
                        <animated.Circle {...springProps} radius={radius} fill="transparent" stroke="white" onClick={handleClick} />
                    </>
                )}
            </Spring>

            <Spring
                config={springConfig}
                native
                from={{ x: props.x, y: props.y, scaleX: 0, scaleY: 0, shadowBlur: 5 }}
                to={{
                    x: expanded ? props.x + offset : props.x,
                    y: expanded ? props.y + offset : props.y,
                    scaleX: expanded ? 1 : 0, scaleY: expanded ? 1 : 0,
                    shadowBlur: expanded ? 25 : 5
                }}
            >

                {springProps => (
                    <>
                        <animated.Circle {...springProps} radius={radius} fill="transparent" stroke="white" onClick={handleClick} />
                    </>
                )}
            </Spring>

            <Spring
                config={springConfig}
                native
                from={{ x: props.x, y: props.y, scaleX: 0, scaleY: 0, shadowBlur: 5 }}
                to={{
                    x: expanded ? props.x - offset : props.x,
                    y: expanded ? props.y + offset : props.y,
                    scaleX: expanded ? 1 : 0, scaleY: expanded ? 1 : 0,
                    shadowBlur: expanded ? 25 : 5
                }}
            >

                {springProps => (
                    <>
                        <animated.Circle {...springProps} radius={radius} fill="transparent" stroke="white" onClick={handleClick} />
                    </>
                )}
            </Spring>


            <Line visible={!expanded} stroke="white" x={horizontalLineX} y={horizontalLiney} points={[0, 0, symbolSize, 0]} />
            <Line visible={!expanded} stroke="white" x={verticalLineX} y={verticalLiney} points={[0, 0, 0, symbolSize]} />
        </>
    );
};
