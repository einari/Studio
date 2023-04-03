/* tslint:disable */
/* eslint-disable */
/**
 * Dolittle.Bridge.M3
 * Bridge API - made for Dolittle Studio
 *
 * The version of the OpenAPI document: 1.0.0.0
 * Contact: dolittle@dolittle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConnectionWithinOrgId } from './ConnectionWithinOrgId';
import {
    ConnectionWithinOrgIdFromJSON,
    ConnectionWithinOrgIdFromJSONTyped,
    ConnectionWithinOrgIdToJSON,
} from './ConnectionWithinOrgId';
import type { Organization } from './Organization';
import {
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
} from './Organization';

/**
 * 
 * @export
 * @interface ConnectionId
 */
export interface ConnectionId {
    /**
     * 
     * @type {string}
     * @memberof ConnectionId
     */
    value?: string | null;
    /**
     * 
     * @type {Organization}
     * @memberof ConnectionId
     */
    organization?: Organization;
    /**
     * 
     * @type {ConnectionWithinOrgId}
     * @memberof ConnectionId
     */
    connection?: ConnectionWithinOrgId;
}

/**
 * Check if a given object implements the ConnectionId interface.
 */
export function instanceOfConnectionId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConnectionIdFromJSON(json: any): ConnectionId {
    return ConnectionIdFromJSONTyped(json, false);
}

export function ConnectionIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'organization': !exists(json, 'organization') ? undefined : OrganizationFromJSON(json['organization']),
        'connection': !exists(json, 'connection') ? undefined : ConnectionWithinOrgIdFromJSON(json['connection']),
    };
}

export function ConnectionIdToJSON(value?: ConnectionId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'organization': OrganizationToJSON(value.organization),
        'connection': ConnectionWithinOrgIdToJSON(value.connection),
    };
}
