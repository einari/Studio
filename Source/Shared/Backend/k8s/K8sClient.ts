// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import fetch from 'node-fetch';
import { IK8sClient } from './IK8sClient';
import { NamespaceList } from './NamespaceList';
import { PodList } from './PodList';

export class K8sClient extends IK8sClient {
    getNamespaces = async () => {
        const response = await fetch('http://localhost:3001/api/v1/namespaces');
        return await response.json() as NamespaceList;
    };

    getPods = async (namespace: string) => {
        const response = await fetch(`http://localhost:3001/api/v1/namespaces/${namespace}/pods`);
        return await response.json() as PodList;
    };
}
