// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { container } from 'tsyringe';
import { constructor } from '@shared/dependencyinversion';
import { createLogger, format, transports } from 'winston';
import { ILogger } from './ILogger';

export let logger: ILogger;

export function configureLogging(microserviceId: string) {
    const loggerOptions = {
        level: 'info',
        format: format.colorize(),
        defaultMeta: {
            microserviceId
        },
        transports: [
            new transports.Console({
                format: format.simple()
            })
        ]
    };

    logger = createLogger(loggerOptions);
    container.registerInstance(ILogger as constructor<ILogger>, logger);
}