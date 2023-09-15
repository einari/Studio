/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StatusMessage } from './StatusMessage';
import {
    StatusMessageFromJSON,
    StatusMessageFromJSONTyped,
    StatusMessageToJSON,
} from './StatusMessage';
import type { StatusSeverity } from './StatusSeverity';
import {
    StatusSeverityFromJSON,
    StatusSeverityFromJSONTyped,
    StatusSeverityToJSON,
} from './StatusSeverity';

/**
 * 
 * @export
 * @interface RemoteServiceStatus
 */
export interface RemoteServiceStatus {
    /**
     * 
     * @type {StatusSeverity}
     * @memberof RemoteServiceStatus
     */
    severity?: StatusSeverity;
    /**
     * 
     * @type {StatusMessage}
     * @memberof RemoteServiceStatus
     */
    statusMessage?: StatusMessage;
    /**
     * 
     * @type {string}
     * @memberof RemoteServiceStatus
     */
    readonly name: string;
    /**
     * 
     * @type {string}
     * @memberof RemoteServiceStatus
     */
    readonly description: string;
}

/**
 * Check if a given object implements the RemoteServiceStatus interface.
 */
export function instanceOfRemoteServiceStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function RemoteServiceStatusFromJSON(json: any): RemoteServiceStatus {
    return RemoteServiceStatusFromJSONTyped(json, false);
}

export function RemoteServiceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteServiceStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'severity': !exists(json, 'severity') ? undefined : StatusSeverityFromJSON(json['severity']),
        'statusMessage': !exists(json, 'statusMessage') ? undefined : StatusMessageFromJSON(json['statusMessage']),
        'name': json['name'],
        'description': json['description'],
    };
}

export function RemoteServiceStatusToJSON(value?: RemoteServiceStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'severity': StatusSeverityToJSON(value.severity),
        'statusMessage': StatusMessageToJSON(value.statusMessage),
    };
}

