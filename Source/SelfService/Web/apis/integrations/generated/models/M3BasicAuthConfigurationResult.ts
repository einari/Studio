/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.320
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
import type { M3BasicAuthConfiguration } from './M3BasicAuthConfiguration';
import {
    M3BasicAuthConfigurationFromJSON,
    M3BasicAuthConfigurationFromJSONTyped,
    M3BasicAuthConfigurationToJSON,
} from './M3BasicAuthConfiguration';

/**
 * A result with the value (if any) and links to other resources (if any)
 * @export
 * @interface M3BasicAuthConfigurationResult
 */
export interface M3BasicAuthConfigurationResult {
    /**
     * 
     * @type {M3BasicAuthConfiguration}
     * @memberof M3BasicAuthConfigurationResult
     */
    value?: M3BasicAuthConfiguration;
    /**
     * Links to other resources. There will usually be a self link, but there
     * may be other links as well with relations that indicate what the link is.
     * @type {Array<Link>}
     * @memberof M3BasicAuthConfigurationResult
     */
    links: Array<Link>;
}

/**
 * Check if a given object implements the M3BasicAuthConfigurationResult interface.
 */
export function instanceOfM3BasicAuthConfigurationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function M3BasicAuthConfigurationResultFromJSON(json: any): M3BasicAuthConfigurationResult {
    return M3BasicAuthConfigurationResultFromJSONTyped(json, false);
}

export function M3BasicAuthConfigurationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): M3BasicAuthConfigurationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : M3BasicAuthConfigurationFromJSON(json['value']),
        'links': ((json['links'] as Array<any>).map(LinkFromJSON)),
    };
}

export function M3BasicAuthConfigurationResultToJSON(value?: M3BasicAuthConfigurationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': M3BasicAuthConfigurationToJSON(value.value),
        'links': ((value.links as Array<any>).map(LinkToJSON)),
    };
}

