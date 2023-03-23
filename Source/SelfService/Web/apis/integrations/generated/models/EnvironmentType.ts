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
/**
 * 
 * @export
 * @interface EnvironmentType
 */
export interface EnvironmentType {
    /**
     * 
     * @type {string}
     * @memberof EnvironmentType
     */
    value?: string | null;
}

/**
 * Check if a given object implements the EnvironmentType interface.
 */
export function instanceOfEnvironmentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EnvironmentTypeFromJSON(json: any): EnvironmentType {
    return EnvironmentTypeFromJSONTyped(json, false);
}

export function EnvironmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function EnvironmentTypeToJSON(value?: EnvironmentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}
