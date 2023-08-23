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
import type { MessageMappingModel } from './MessageMappingModel';
import {
    MessageMappingModelFromJSON,
    MessageMappingModelFromJSONTyped,
    MessageMappingModelToJSON,
} from './MessageMappingModel';

/**
 * A result with the value (if any) and links to other resources (if any)
 * @export
 * @interface MessageMappingModelResult
 */
export interface MessageMappingModelResult {
    /**
     * 
     * @type {MessageMappingModel}
     * @memberof MessageMappingModelResult
     */
    value?: MessageMappingModel;
    /**
     * Links to other resources. There will usually be a self link, but there
     * may be other links as well with relations that indicate what the link is.
     * @type {Array<Link>}
     * @memberof MessageMappingModelResult
     */
    links: Array<Link>;
}

/**
 * Check if a given object implements the MessageMappingModelResult interface.
 */
export function instanceOfMessageMappingModelResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function MessageMappingModelResultFromJSON(json: any): MessageMappingModelResult {
    return MessageMappingModelResultFromJSONTyped(json, false);
}

export function MessageMappingModelResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageMappingModelResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : MessageMappingModelFromJSON(json['value']),
        'links': ((json['links'] as Array<any>).map(LinkFromJSON)),
    };
}

export function MessageMappingModelResultToJSON(value?: MessageMappingModelResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': MessageMappingModelToJSON(value.value),
        'links': ((value.links as Array<any>).map(LinkToJSON)),
    };
}

