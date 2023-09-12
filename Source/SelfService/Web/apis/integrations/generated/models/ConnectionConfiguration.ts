/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.351
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { IonConfiguration } from './IonConfiguration';
import {
    IonConfigurationFromJSON,
    IonConfigurationFromJSONTyped,
    IonConfigurationToJSON,
} from './IonConfiguration';
import type { M3BasicAuthConfiguration } from './M3BasicAuthConfiguration';
import {
    M3BasicAuthConfigurationFromJSON,
    M3BasicAuthConfigurationFromJSONTyped,
    M3BasicAuthConfigurationToJSON,
} from './M3BasicAuthConfiguration';
import type { MdpConfiguration } from './MdpConfiguration';
import {
    MdpConfigurationFromJSON,
    MdpConfigurationFromJSONTyped,
    MdpConfigurationToJSON,
} from './MdpConfiguration';

/**
 * 
 * @export
 * @interface ConnectionConfiguration
 */
export interface ConnectionConfiguration {
    /**
     * 
     * @type {IonConfiguration}
     * @memberof ConnectionConfiguration
     */
    ion?: IonConfiguration;
    /**
     * 
     * @type {M3BasicAuthConfiguration}
     * @memberof ConnectionConfiguration
     */
    m3BasicAuth?: M3BasicAuthConfiguration;
    /**
     * 
     * @type {MdpConfiguration}
     * @memberof ConnectionConfiguration
     */
    mdp: MdpConfiguration;
}

/**
 * Check if a given object implements the ConnectionConfiguration interface.
 */
export function instanceOfConnectionConfiguration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mdp" in value;

    return isInstance;
}

export function ConnectionConfigurationFromJSON(json: any): ConnectionConfiguration {
    return ConnectionConfigurationFromJSONTyped(json, false);
}

export function ConnectionConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ion': !exists(json, 'ion') ? undefined : IonConfigurationFromJSON(json['ion']),
        'm3BasicAuth': !exists(json, 'm3BasicAuth') ? undefined : M3BasicAuthConfigurationFromJSON(json['m3BasicAuth']),
        'mdp': MdpConfigurationFromJSON(json['mdp']),
    };
}

export function ConnectionConfigurationToJSON(value?: ConnectionConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ion': IonConfigurationToJSON(value.ion),
        'm3BasicAuth': M3BasicAuthConfigurationToJSON(value.m3BasicAuth),
        'mdp': MdpConfigurationToJSON(value.mdp),
    };
}

