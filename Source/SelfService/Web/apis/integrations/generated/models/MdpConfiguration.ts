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
/**
 * 
 * @export
 * @interface MdpConfiguration
 */
export interface MdpConfiguration {
    /**
     * 
     * @type {string}
     * @memberof MdpConfiguration
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof MdpConfiguration
     */
    password: string;
    /**
     * 
     * @type {boolean}
     * @memberof MdpConfiguration
     */
    allowInsecureHttps: boolean;
    /**
     * 
     * @type {string}
     * @memberof MdpConfiguration
     */
    updatedBy: string;
}

/**
 * Check if a given object implements the MdpConfiguration interface.
 */
export function instanceOfMdpConfiguration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "allowInsecureHttps" in value;
    isInstance = isInstance && "updatedBy" in value;

    return isInstance;
}

export function MdpConfigurationFromJSON(json: any): MdpConfiguration {
    return MdpConfigurationFromJSONTyped(json, false);
}

export function MdpConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MdpConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'password': json['password'],
        'allowInsecureHttps': json['allowInsecureHttps'],
        'updatedBy': json['updatedBy'],
    };
}

export function MdpConfigurationToJSON(value?: MdpConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'password': value.password,
        'allowInsecureHttps': value.allowInsecureHttps,
        'updatedBy': value.updatedBy,
    };
}

