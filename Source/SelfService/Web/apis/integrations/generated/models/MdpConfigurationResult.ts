/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.292
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Link } from './Link';
import {
    LinkFromJSON,
    LinkFromJSONTyped,
    LinkToJSON,
} from './Link';
import type { MdpConfiguration } from './MdpConfiguration';
import {
    MdpConfigurationFromJSON,
    MdpConfigurationFromJSONTyped,
    MdpConfigurationToJSON,
} from './MdpConfiguration';

/**
 * A result with the value (if any) and links to other resources (if any)
 * @export
 * @interface MdpConfigurationResult
 */
export interface MdpConfigurationResult {
    /**
     * 
     * @type {MdpConfiguration}
     * @memberof MdpConfigurationResult
     */
    value?: MdpConfiguration;
    /**
     * Links to other resources. There will usually be a self link, but there
     * may be other links as well with relations that indicate what the link is.
     * @type {Array<Link>}
     * @memberof MdpConfigurationResult
     */
    links: Array<Link>;
}

/**
 * Check if a given object implements the MdpConfigurationResult interface.
 */
export function instanceOfMdpConfigurationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function MdpConfigurationResultFromJSON(json: any): MdpConfigurationResult {
    return MdpConfigurationResultFromJSONTyped(json, false);
}

export function MdpConfigurationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MdpConfigurationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : MdpConfigurationFromJSON(json['value']),
        'links': ((json['links'] as Array<any>).map(LinkFromJSON)),
    };
}

export function MdpConfigurationResultToJSON(value?: MdpConfigurationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': MdpConfigurationToJSON(value.value),
        'links': ((value.links as Array<any>).map(LinkToJSON)),
    };
}

