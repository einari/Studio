// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { injectable, inject } from 'tsyringe';
import { IApplicationLog, IApplicationLogToken } from '../common';

@injectable()
export class HomeViewModel {

    constructor(@inject(IApplicationLogToken) private readonly _applicationLog: IApplicationLog) {}

    start() {
        this._applicationLog.start();
    }
}
