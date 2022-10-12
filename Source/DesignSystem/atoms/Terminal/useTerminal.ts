// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useEffect, useRef, RefCallback } from 'react';
import { IDisposable, Terminal as XTerminal } from 'xterm';
import 'xterm/css/xterm.css';

export type Terminal = {
    readonly instance: XTerminal;
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<string>;
    readonly containerRef: RefCallback<HTMLDivElement>;
};

export const useTerminal = (): Terminal => {
    const ref = useRef<Terminal>();
    if (ref.current === undefined) {
        const instance = new XTerminal({
        });

        const readable = createReadable(instance);
        const writable = createWritable(instance);
        const containerRef = createRefCallback(instance);

        ref.current = { instance, readable, writable, containerRef };
    }

    return ref.current;
};

const createRefCallback = (term: XTerminal): RefCallback<HTMLDivElement> =>
    (container) => {
        if (container === null) {
            term.dispose();
            return;
        };

        term.open(container);
    };

const createReadable = (term: XTerminal): ReadableStream<string> => {
    let listener: IDisposable | undefined;

    return new ReadableStream<string>({
        start(controller) {
            listener = term.onData((chunk) => {
                controller.enqueue(chunk);
            });
        },
        cancel() {
            listener?.dispose();
        }
    });
};

const createWritable = (term: XTerminal): WritableStream<string> => {
    return new WritableStream<string>({
        write(chunk) {
            return new Promise(resolve => {
                term.write(chunk, resolve);
            });
        },
    });
};
